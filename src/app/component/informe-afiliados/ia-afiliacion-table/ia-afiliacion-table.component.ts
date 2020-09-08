import { Component, ViewChild, ElementRef } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

declare function copyFormatted(html): any;
declare function printHtml(html): any;

@Component({
  selector: 'app-ia-afiliacion-table',
  templateUrl: './ia-afiliacion-table.component.html',
  styles:[`
  table {
    width: auto;
  }
  `]
})
export class IaAfiliacionTableComponent extends TableComponent { 
  @ViewChild("informeafiliacion", {read: ElementRef}) informeafiliacion: ElementRef;

  copyData(): void {
    if(this.informeafiliacion){
      copyFormatted(this.informeafiliacion.nativeElement.innerHTML);
    }
  }

  printData(): void {
    if(this.informeafiliacion){
      printHtml(this.informeafiliacion.nativeElement.innerHTML);
    }
  }

  
}
