import { Component } from '@angular/core';
import { ComponentOptions } from '@class/component-options';
import { LinkTextFieldViewOptions } from '@class/field-type-options';
import { FormArrayConfig, FormControlConfig } from '@class/reactive-form-config';
import { TableDynamicOptions } from '@class/table-dynamic-options';
import { ShowComponent } from '@component/show/show.component';
import { FILE_URL } from '@config/app.config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArchivoAfiliacionesFormGroupFactory } from './archivo-afiliaciones-form-group-factory.class';

@Component({
  selector: 'app-archivo-afiliaciones-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ArchivoAfiliacionesShowComponent extends ShowComponent {
  readonly entityName: string = "archivo_afiliaciones"
  loadLength: boolean = false
  fileUrl = FILE_URL

  nestedComponent: ComponentOptions = new TableDynamicOptions({
    title:"Archivo Afiliaciones",
    sortDisabled:["archivo"],
    showPaginator:false
  })

  config: FormArrayConfig = new FormArrayConfig({
    factory:new ArchivoAfiliacionesFormGroupFactory,  
    controls: {
      "archivo": new FormControlConfig({
        label:"Archivo",
        type: new LinkTextFieldViewOptions({
          download: true,
          prefix:this.fileUrl,
          target: "_blank"
        })
      }),
    }
  })

  private transformToObject(e) { return {archivo:e} } 
  /**
   * funcion de transformacion para que coincida con el formato esperado de retorno
   */

  queryData(): Observable<any>{
    return this.dd._post("list", this.entityName, this.params).pipe(
      map(
        data => {
          return data.map(this.transformToObject)
        }
      )
    )
  }

}
