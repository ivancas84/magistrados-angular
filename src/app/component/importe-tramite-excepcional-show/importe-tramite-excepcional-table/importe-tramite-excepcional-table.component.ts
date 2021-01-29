import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@component/table/table.component';
import { arrayColumn } from '@function/array-column';
import { arrayCombine } from '@function/array-combine';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';

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
  @Input() data;
  total: number;
  constructor(
    protected router: Router,
    protected dd: DataDefinitionService,
    protected ddt: DataDefinitionToolService
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
          return this.initData(data);
        }
      ),
      map(
        data => {  
          this.dataSource = data;
          this.total = this.dataSource.map(t => t.valor).reduce((acc, value) => acc + value, 0).toFixed(2);
          return this.load = true;
        }
      )
    )
  }

  initData(data): Observable<any>{
    var idsAfiliaciones = arrayColumn(data, "tramite_excepcional");
    return this.dd.getAll("tramite_excepcional", idsAfiliaciones).pipe(
      switchMap(
        afiliaciones => {
          return this.personaData(afiliaciones);
        }
      ),
      switchMap(
        personas => {
          //return this.ddt.getAllColumnData(personas, "departamento_judicial", "departamento_judicial", {})
          return this.departamentoJudicialData(personas);          
        }
      ),
      switchMap(
        personas => {
          return this.departamentoJudicialInformadoData(personas);
        }
      ),
    );
  }

  personaData(afiliaciones){
    var idsPersonas = arrayColumn(afiliaciones, "persona");
    return this.dd.getAll("persona", idsPersonas).pipe(
      map(
        personas => {
          for(var i = 0; i < personas.length; i++){
            personas[i]["nombre"] = personas[i]["apellidos"] + " " + personas[i]["nombres"];
            for(var j = 0; j < afiliaciones.length; j++){
              if(personas[i]["id"] == afiliaciones[j]["persona"]) personas[i]["valor"] = afiliaciones[j]["monto"]
            }
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
          for(var i = 0; i < personas.length; i++){
            for(var j = 0; j < departamentos.length; j++){
              if(personas[i]["departamento_judicial"] == departamentos[j]["id"]) 
                personas[i]["departamento_judicial"] = departamentos[j]["codigo"] + " " + departamentos[j]["nombre"];
            }
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
              if(personas[j]["departamento_judicial_informado"] == departamentos[i]["id"]) 
                personas[j]["departamento_judicial_informado"] = departamentos[i]["codigo"];
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
