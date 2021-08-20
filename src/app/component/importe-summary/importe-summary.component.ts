import { Component } from '@angular/core';
import { AbstractControlViewOptions, TableViewOptions } from '@class/abstract-control-view-options';
import { FormArrayConfig, FormControlConfig } from '@class/reactive-form-config';
import { ShowComponent } from '@component/show/show.component';
import { ImporteSummaryFormGroupFactory } from './importe-summary-form-group-factory.class';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ImporteSummaryComponent extends ShowComponent {
  readonly entityName: string = "importe"

  queryData(): Observable<any>{
    if(!this.display$.value.hasOwnProperty("params")) return of([]);
    return this.dd.post("info", this.entityName, this.display$.value.getParams());
  }

  config: FormArrayConfig = new FormArrayConfig({
    factory:new ImporteSummaryFormGroupFactory  ,  
    controls: {
      "afiliaciones": new FormControlConfig({
        label:"Afiliaciones",
      }),
    }
  })
  
  nestedComponent: AbstractControlViewOptions = new TableViewOptions({
    title:"Resumen importes",
    config:this.config,
    fieldset:this.form
  })


}

