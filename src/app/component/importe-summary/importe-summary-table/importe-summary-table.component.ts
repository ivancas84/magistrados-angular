import { Component, ElementRef, ViewChild } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

declare function copyFormatted(html): any;

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

  @ViewChild("summary", {read: ElementRef}) summary: ElementRef;
 
  copyData(): void {
    if(this.summary){
      copyFormatted(this.summary.nativeElement.innerHTML);
    }
  }

}
