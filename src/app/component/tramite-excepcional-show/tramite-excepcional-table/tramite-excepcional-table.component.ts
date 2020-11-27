import { Component, SimpleChanges } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { arrayColumn } from '@function/array-column';
import { Router } from '@angular/router';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Sort } from '@angular/material/sort';
import { emptyUrl } from '@function/empty-url.function';
import { AfiliacionTableComponent } from '@component/afiliacion-show/afiliacion-table/afiliacion-table.component';

@Component({
  selector: 'app-tramite-excepcional-table',
  templateUrl: './tramite-excepcional-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class TramiteExcepcionalTableComponent extends AfiliacionTableComponent { 
  displayedColumns: string[] = ['nombre', 'legajo', 'departamento_judicial', 'desde', 'hasta', 'monto', 'motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado'];

  
  constructor(
    protected router: Router,
    protected dd: DataDefinitionService,
  ) {
    super(router, dd);
  }

    
}
