import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-importe-summary-table',
  templateUrl: './importe-summary-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class ImporteSummaryTableComponent extends TableComponent { 
  displayedColumns: string[] = ['afi_per_departamento_judicial', 'count', 'imp_valor'];

}
