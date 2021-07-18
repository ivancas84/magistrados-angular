import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Display } from '@class/display';
import { TableComponent } from '@component/table/table.component';
import { isEmptyObject } from '@function/is-empty-object.function';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-p-tramite-excepcional-table',
  templateUrl: './tramite-excepcional-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class PTramiteExcepcionalTableComponent extends TableComponent implements OnChanges{ 
  displayedColumns: string[] = ['motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado', 'observaciones', 'desde', 'hasta', 'monto'];


  load$: Observable<any>;
  load: boolean;
  data$: BehaviorSubject<any> = new BehaviorSubject(null);
  @Input() data: any;
    
  ngOnChanges(changes: SimpleChanges): void {
    if( changes['data'] && changes['data'].previousValue != changes['data'].currentValue ) {    
        this.data$.next(changes['data'].currentValue);
    }
  }
  
  ngOnInit(): void {
    this.load$ = this.data$.pipe(
      switchMap(
        persona => {
          this.load = false;
          if(isEmptyObject(persona) || !persona.id) return of(null);
          var d = new Display();
          d.setParams({persona:persona.id})
          d.setOrder({"creado":"desc"});
          return this.dd.all("tramite_excepcional",d);
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
