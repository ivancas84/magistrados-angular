import { Component, ElementRef, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldControl } from '@class/field-control';
import { TableComponent } from '@component/table/table.component';
import { emptyUrl } from '@function/empty-url.function';

@Component({
  selector: 'app-importe-summary-table',
  templateUrl: './importe-summary-table.component.html',
  styles:[`
    .mat-card-content { overflow-x: auto; }
    .mat-table.mat-table { min-width: 700px; }
    tr.mat-footer-row { font-weight: bold; }
  `],
})
export class ImporteSummaryTableComponent extends TableComponent { 
  displayedColumns: string[] = ['nombre', 'afiliaciones', 'importe', 'cuota_asociativa', 'fam', 'total_deduccion', 'total_pagar', 'viatico', 'total'];

  footer: { [index: string]: any } = {}; //footer

  viatico: FieldControl = new FieldControl({
    field:"valor", width:"100px", 
    validators: [Validators.pattern('^-?[0-9]+(\\.[0-9]{1,2})?$'),
    Validators.max(99999999999999999.99),
    Validators.min(-99999999999999999.99)]
  });

  editViatico: boolean = false

  edit(){ 
    this.editViatico = !this.editViatico 
    if(!this.editViatico){
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
        this.router.navigateByUrl('/importe-summary?' + this.display.encodeURI())  
      );
    } 
  }

  ngOnInit(): void {
    if(!this.length) this.length = this.dataSource.length;    
    this.footer["afiliaciones"] = this.dataSource.map(t => t["afiliaciones"]).reduce((acc, value) => acc + value, 0).toFixed(0);
    this.footer["importe"] = this.dataSource.map(t => t["importe"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["cuota_asociativa"] = this.dataSource.map(t => t["cuota_asociativa"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["fam"] = this.dataSource.map(t => t["fam"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["total_deduccion"] = this.dataSource.map(t => t["total_deduccion"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["total_pagar"] = this.dataSource.map(t => t["total_pagar"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["viatico"] = this.dataSource.map(t => t["viatico"]).reduce((acc, value) => acc + value, 0).toFixed(2);
    this.footer["total"] = this.dataSource.map(t => t["total"]).reduce((acc, value) => acc + value, 0).toFixed(2);
  }
}
