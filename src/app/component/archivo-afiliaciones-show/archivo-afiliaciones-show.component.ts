import { Component } from '@angular/core';
import { FormArrayConfig, FormControlConfig } from '@class/reactive-form-config';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { LinkTextComponent, LinkTextConfig } from '@component/link-text/link-text.component';
import { ShowComponent } from '@component/show/show.component';
import { TableDynamicComponent, TableDynamicConfig } from '@component/table/table-dynamic.component';
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

  config: FormArrayConfig = new TableDynamicConfig({
    title:"Archivo Afiliaciones",
    sortDisabled:["archivo"],
    showPaginator:false,
    factory:new ArchivoAfiliacionesFormGroupFactory,  
    controls: {
      "archivo": new LinkTextConfig({
        label:"Archivo",
        download: true,
        prefix:this.fileUrl,
        target: "_blank"
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
