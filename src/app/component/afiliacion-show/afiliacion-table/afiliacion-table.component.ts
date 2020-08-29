import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { Sort } from '@angular/material/sort';
import { emptyUrl } from '@function/empty-url.function';
import { compare } from '@function/compare';

@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class AfiliacionTableComponent extends TableComponent { 
  displayedColumns: string[] = ['persona', 'motivo', 'estado', 'creado', 'enviado', 'evaluado', 'modificado', 'observaciones'];

  serverSort(sort: Sort): boolean{
    /**
     * @override
     */
    if(sort.active == "persona"){
      const order = {"per_nombres":sort.direction};
      this.display$.value.setOrder(order);
      this.display$.value.setPage(1);

      this.router.navigateByUrl('/' + emptyUrl(this.router.url) + '?' + this.display$.value.encodeURI());  
      return true;
    }
    return super.serverSort(sort);
  }
  
}
