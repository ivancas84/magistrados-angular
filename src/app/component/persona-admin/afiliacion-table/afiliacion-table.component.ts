import { Component, ViewChild, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { isEmptyObject } from '@function/is-empty-object.function';
import { Display } from '@class/display';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-persona-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class PersonaAfiliacionTableComponent extends TableComponent implements OnInit, OnChanges{
  displayedColumns: string[] = ['motivo', 'estado', 'codigo', 'organo', 'departamento_judicial', 'creado', 'enviado', 'evaluado', 'modificado', 'observaciones'];

  load$: Observable<any>;
  load: boolean;
  data$: BehaviorSubject<any> = new BehaviorSubject(null);
  @Input() data;
    
  ngOnChanges(changes: SimpleChanges): void {
    if( changes['data'] && changes['data'].previousValue != changes['data'].currentValue ) {    
        this.data$.next(changes['data'].currentValue);
    }
  }
  
  ngOnInit(): void {
    this.load$ = this.data$.pipe(
      mergeMap(
        persona => {
          this.load = false;
          if(isEmptyObject(persona) || !persona.id) return of(null);
          var d = new Display();
          d.setParams({persona:persona.id})
          d.setOrder({"creado":"desc"});
          return this.dd.all("afiliacion",d);
        }),
      map(
        data => {
          this.dataSource = data;
          this.load = true;
          return true;
        }
      )
    )
  }

  
}


