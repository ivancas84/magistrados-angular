import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
})
export class AfiliacionTableComponent extends TableComponent { 
  displayedColumns: string[] = ['motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado', 'observaciones', 'persona'];

}
