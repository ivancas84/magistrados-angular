import { Component, Input, SimpleChanges } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { arrayColumn } from '@function/array-column';
import { Router } from '@angular/router';
import { Sort } from '@angular/material/sort';
import { emptyUrl } from '@function/empty-url.function';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';

@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class AfiliacionTableComponent extends TableComponent { 
  displayedColumns: string[] = ['nombre', 'legajo', 'departamento_judicial', 'motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado'];

  load$: Observable<any>;
  load: boolean = false;
  data$: BehaviorSubject<any> = new BehaviorSubject(null);
  @Input() data;

  

  
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
    var fields = {legajo:"legajo",nombre:["apellidos","nombres"],departamento_judicial:"departamento_judicial",departamento_judicial_informado:"departamento_judicial_informado"}
    return this.dd.getAllColumnData(data,"persona", "persona",fields);    
  }

  serverSort(sort: Sort): boolean{ //@override
    
    var server = false; //flag para indicar que obligatoriamente debe ordenarse el servidor
    switch(sort.active){
      case "departamento_judicial": server = true; break;
    }

    if(!server && (!this.length || !this.display || this.data.length >= this.length)) return false;
    switch(sort.active){
      case "nombre": this.display.setOrderByKeys(["per-apellidos","per-nombres"]); break;
      case "legajo": this.display.setOrderByKeys(["per-legajo"]); break;
      case "departamento_judicial": this.display.setOrderByKeys(["per_dj-codigo"]); break;
    }
    this.display.setPage(1);
    this.router.navigateByUrl('/' + emptyUrl(this.router.url) + '?' + this.display.encodeURI());  
    return true;
  }
  

  
}
