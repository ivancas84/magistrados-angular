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
  displayedColumns: string[] = ['nombre', 'afiliaciones', 'importe', 'cuota_asociativa', 'fam', 'total_deduccion', 'total_pagar', 'viatico', 'total'];

}
