import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Display } from '@class/display';
import { TableComponent } from '@component/table/table.component';
import { isEmptyObject } from '@function/is-empty-object.function';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-p-tramite-excepcional-table',
  templateUrl: './tramite-excepcional-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class PTramiteExcepcionalTableComponent extends TableComponent { 
  displayedColumns: string[] = ['motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado', 'observaciones', 'desde', 'hasta', 'monto'];

  constructor(
    protected dd: DataDefinitionService,
    protected router: Router,
  ) {
    super(router);
  }
  
  ngOnInit(): void {
    this.load$ = this.data$.pipe(
      switchMap(
        persona => {
          this.load = false;
          if(isEmptyObject(persona)) return of(null);
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
