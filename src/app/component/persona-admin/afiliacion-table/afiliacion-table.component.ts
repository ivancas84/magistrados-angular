import { Component, ViewChild, OnInit } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';
import { isEmptyObject } from '@function/is-empty-object.function';
import { Display } from '@class/display';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
})
export class AfiliacionTableComponent extends ShowElementComponent implements OnInit{
  displayedColumns: string[] = ['id', 'motivo'];

  load$: Observable<any>;
  data: { [index: string]: any }[] = [];
  pageEvent: PageEvent;


  constructor(
    protected dd: DataDefinitionService,
    protected router: Router,
  ) {
    super(router);
  }
  
  ngOnInit(): void {

    this.load$ = this.data$.pipe(
      mergeMap(
        persona => {
          if(isEmptyObject(persona)) return of(null);
          var d = new Display();
          d.setParams({persona:persona.id})
          return this.dd.all("afiliacion",d);
        }),
      tap(
        data => this.dataSource = data
      )
    )
  }

  
}


