import { Component, SimpleChanges } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { arrayColumn } from '@function/array-column';
import { Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class AfiliacionTableComponent extends TableComponent { 
  displayedColumns: string[] = ['per-apellidos', 'per-legajo', 'per_dj-codigo', 'motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado'];

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
    var idsPersonas = arrayColumn(data, "persona");
    return this.dd.getAll("persona", idsPersonas).pipe(
      map(
        personas => {
          for(var i = 0; i < data.length; i++){
            data[i]["legajo"] = personas[i]["legajo"];
            data[i]["nombre"] = personas[i]["apellidos"] + ", " + personas[i]["nombres"];
            data[i]["departamento_judicial"] = personas[i]["departamento_judicial"];
            data[i]["departamento_judicial_informado"] = personas[i]["departamento_judicial_informado"];
          }
          return data;
        }
      )
    );
  }
  
  
}
