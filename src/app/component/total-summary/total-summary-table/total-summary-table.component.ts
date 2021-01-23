import { Component, OnInit } from '@angular/core';
import { ImporteSummaryTableComponent } from '@component/importe-summary/importe-summary-table/importe-summary-table.component';

declare function numerosALetras(numero, formato): any;

@Component({
  selector: 'app-total-summary-table',
  templateUrl: './total-summary-table.component.html',
  styles:[`
    .right { text-align: right; }
    .justify { text-align: justify; }
  `],
})
export class TotalSummaryTableComponent extends ImporteSummaryTableComponent implements OnInit { 
 ngOnInit(){
   super.ngOnInit();
   this.footer["total_pagar_letras"] = numerosALetras(this.footer["total_pagar"], {
    plural: 'PESOS',
    singular: 'PESO',
    centPlural: 'CENTAVOS',
    centSingular: 'CENTAVO'});
 }
}
