import { Component } from '@angular/core';
import { ShowElementComponent } from '@component/show-element/show-element.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isEmptyObject } from '@function/is-empty-object.function';
import { Display } from '@class/display';


@Component({
  selector: 'app-afiliacion-table',
  templateUrl: './afiliacion-table.component.html',
})
export class AfiliacionTableComponent extends ShowElementComponent{
  displayedColumns: string[] = ['id', 'motivo'];

  load$: Observable<any>;
  
  
  dataSource: { [index: string]: any }[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];


  data: { [index: string]: any }[] = [];

  constructor(
    protected dd: DataDefinitionService,
    protected router: Router,
  ) {
    super(router);
  }
  
  ngOnInit(): void {
    this.load$ = this.data$.pipe(map(
      persona => {
        if(isEmptyObject(persona)) return of(null);
        var d = new Display();
        d.setParams({persona:persona.id})
        return this.dd.all("afiliacion",d);
      }
    ))
  }

}
