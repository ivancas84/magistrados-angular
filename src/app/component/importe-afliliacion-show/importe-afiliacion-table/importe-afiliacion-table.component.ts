import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TableComponent } from '@component/table/table.component';
import { arrayColumn } from '@function/array-column';
import { arrayCombineKey } from '@function/array-combine-key';
import { fastClone } from '@function/fast-clone';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-importe-afiliacion-table',
  templateUrl: './importe-afiliacion-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class ImporteAfiliacionTableComponent extends TableComponent { 
  displayedColumns: string[] = ['nombre', 'legajo', 'valor'];

  load$: Observable<any>;
  load: boolean = false;
  data$: BehaviorSubject<any> = new BehaviorSubject(null);
  dataSource: any;

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
          return this.initData(data);
        }
      ),
      map(
        data => {          
          this.dataSource = data;
          return this.load = true;
        }
      )
    )
  }

  initData(data): Observable<any>{
    var idsAfiliaciones = arrayColumn(data, "afiliacion");
    return this.dd.getAll("afiliacion", idsAfiliaciones).pipe(
      switchMap(
        afiliaciones => {
          var idsPersonas = arrayColumn(afiliaciones, "persona");
          return this.dd.getAll("persona", idsPersonas);
        }
      ),
      map(
        personas => {
          for(var i = 0; i < data.length; i++){
            data[i]["legajo"] = personas[i]["legajo"];
            data[i]["nombre"] = personas[i]["apellidos"] + " " + personas[i]["nombres"] ;
          }
          return data;
        }
      )
    );
  }

  showValor = true;
  switchValor(){
    this.showValor = !this.showValor;
    if(this.showValor) this.displayedColumns[2] = "valor";
    else this.displayedColumns.splice(2,1);
  }



}
