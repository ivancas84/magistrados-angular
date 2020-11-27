import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@component/table/table.component';
import { arrayColumn } from '@function/array-column';

import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-importe-tramite-excepcional-table',
  templateUrl: './importe-tramite-excepcional-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  tr.mat-footer-row { font-weight: bold; }
  `],
})
export class ImporteTramiteExcepcionalTableComponent extends TableComponent { 
  displayedColumns: string[] = ['nombre', 'legajo', 'departamento_judicial', 'valor'];

  load$: Observable<any>;
  load: boolean = false;
  data$: BehaviorSubject<any> = new BehaviorSubject(null);
  dataSource: any;
  total: number;
  constructor(
    protected router: Router,
    protected dd: DataDefinitionService,
  ) {
    super(router);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['data'] && changes['data'].previousValue != changes['data'].currentValue ) {    
        this.data$.next(changes['data'].currentValue);
    }
  }

  ngOnInit(): void {
    this.load$ = this.data$.pipe(  
      switchMap(      
        data => {
          this.load = false;
          this.dataSource = data;
          return this.initData();
        }
      ),
      map(
        () => {          
          console.log(this.dataSource);
          this.total = this.dataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0).toFixed(2);
          return this.load = true;
        }
      )
    )
  }

  initData(): Observable<any>{
    var idsAfiliaciones = arrayColumn(this.dataSource, "tramite_excepcional");
    return this.dd.getAll("tramite_excepcional", idsAfiliaciones).pipe(
      switchMap(
        afiliaciones => {
          return this.personaData(afiliaciones);
        }
      ),
      switchMap(
        personas => {
          return this.departamentoJudicialData(personas);          
        }
      ),
      switchMap(
        personas => {
          return this.departamentoJudicialInformadoData(personas);
        }
      )
    );
  }

  personaData(afiliaciones){
    
    var idsPersonas = arrayColumn(afiliaciones, "persona");
    return this.dd.getAll("persona", idsPersonas).pipe(
      map(
        personas => {
          for(var i = 0; i < this.dataSource.length; i++){
            this.dataSource[i]["legajo"] = personas[i]["legajo"];
            this.dataSource[i]["nombre"] = personas[i]["apellidos"] + " " + personas[i]["nombres"];
          }
          return personas;
        }
      )
    );
  }

  departamentoJudicialData(personas){
    var idsDepartamentosJudiciales = arrayColumn(personas, "departamento_judicial");
    return this.dd.getAll("departamento_judicial", idsDepartamentosJudiciales).pipe(
      map(
        departamentos => {
          for(var i = 0; i < this.dataSource.length; i++){
            this.dataSource[i]["departamento_judicial"] = departamentos[i]["codigo"] + " " + departamentos[i]["nombre"];
          }
          return personas;
        }
      )
    );
  }

  departamentoJudicialInformadoData(personas){
    var ids = arrayColumn(personas, "departamento_judicial_informado")
      .filter(function (el) { return el != null; });
    return this.dd.getAll("departamento_judicial", ids).pipe(
      map(
        departamentos => {
          for(var i = 0; i < departamentos.length; i++){
            for(var j = 0; j < personas.length; j++){
              if(personas[j]["departamento_judicial_informado"] == departamentos[i]["id"]) this.dataSource[j]["departamento_judicial_informado"] = departamentos[i]["codigo"];
            }
          }
          return personas;
        }
      )
    );
  }

  showValor = true;
  switchValor(){
    this.showValor = !this.showValor;
    if(this.showValor) this.displayedColumns[3] = "valor";
    else this.displayedColumns.splice(3,1);
  }

}
