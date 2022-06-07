import { Component } from '@angular/core';
import { FormArrayConfig, FormControlConfig } from '@class/reactive-form-config';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { LinkTextConfig } from '@component/link-text/link-text.component';
import { LinkValueConfig } from '@component/link-value/link-value.component';
import { TableComponent } from '@component/structure/table.component';
import { FILE_URL } from '@config/app.config';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-archivo-afiliaciones-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ArchivoAfiliacionesShowComponent extends TableComponent {
  override entityName: string = "archivo_afiliaciones"
  fileUrl = FILE_URL

  override config: FormArrayConfig = new FormArrayConfig({ 
      "archivo": new LinkValueConfig({
        download: true,
        prefix:this.fileUrl,
        target: "_blank",
      }),
  })


  override loadDisplay(){
    /**
     * Se define un load independiente para el display, es util para reasignar
     * valores directamente al display y reinicializar por ejemplo al limpiar
     * o resetear el formulario
     */
    this.loadDisplay$ = this.display$.pipe(
      switchMap(
        () =>  {
          this.load = false
          return this.initData()
        }
      ),
      map(
        data => {
          this.setData(data)
          return this.load = true;
        }
      ),
    )
  }


  private transformToObject(e: any) { return {archivo:e} } 
  /**
   * funcion de transformacion para que coincida con el formato esperado de retorno
   */

  override initData(): Observable<any>{
    return this.dd._post("list", this.entityName, this.params).pipe(
      map(
        data => {
          return data.map(this.transformToObject)
        }
      )
    )
  }

  override optTitle: AbstractControlViewOption[] = [
    {
      config: new EventIconConfig({
        icon: "content_copy", //icono del boton
        action: "copy_content", //accion del evento a realizar
        fieldEvent: this.optField,
        title: "Copiar"
      })
    },
    {
      config: new EventIconConfig({
        icon: "print", //icono del boton
        action: "print_content", //accion del evento a realizar
        fieldEvent: this.optField,
        title: "Imprimir"
      })
    },

  ]; 

}
