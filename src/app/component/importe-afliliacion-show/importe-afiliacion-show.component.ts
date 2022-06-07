import { Component } from '@angular/core';
import { Display } from '@class/display';
import { FormArrayConfig, FormGroupConfig } from '@class/reactive-form-config';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { TableComponent } from '@component/structure/table.component';
import { switchMap, of, map, Observable } from 'rxjs';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteAfiliacionShowComponent extends TableComponent {

  override entityName: string = "importe_afiliacion";

  override title: string = "Importes Registro 40"

  override serverSortTranslate = {
    "persona":["afi_per-nombres","afi_per-apellidos"],
    "departamento_judicial":["afi_dj-codigo"],
    "organo":["afi_org-descripcion"]
  }

  override serverSortObligatory = ["afi-persona","afi-departamento_judicial","afi-organo"]
    
  override config: FormArrayConfig = new FormArrayConfig({
      "persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          entityName:"persona"
        }),
        path: "persona-admin", 
        params:{id:"{{persona}})"}
      }),
      "departamento_judicial": new ControlLabelConfig,
      "organo": new ControlLabelConfig,
      "codigo": new ControlValueConfig({
        label:"Cód",
      }),
      "periodo": new ControlDateConfig({
        format: "dd/MM/yyyy"
      }),
      "valor": new ControlValueConfig,
    }
  )

  override searchConfig = new FormGroupConfig({
        "periodo.ym": new InputYmConfig({
          label:"Período",
        }),
        "afi-departamento_judicial": new InputSelectConfig,
        "afi-organo": new InputSelectConfig,
        "afi-codigo": new InputSelectParamConfig({
          options:[161,162],
        }),
  })

  override initDisplay() {
    var display = new Display();
    display.setSize(0);
    display.setParamsByQueryParams(this.params);
    this.display$.next(display)
  }


  override initData(): Observable<any>{
    
    return this.dd.all(this.entityName, this.display$.value).pipe(
      switchMap(
        data =>  this.dd.getAllConnection(data, "afiliacion", {"persona":"persona","departamento_judicial":"departamento_judicial","organo":"organo","codigo":"codigo"}, "afiliacion")
      ),
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

