import { Component, OnInit } from '@angular/core';
import { FormGroupConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { Observable } from 'rxjs';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputSelectLabelConfig } from '@component/input-select-label/input-select-label.component';
import { DetailComponent } from '@component/structure/detail.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';

@Component({
  selector: 'app-archivo-sueldos-create',
  templateUrl: '../../core/component/structure/detail.component.html',
})
export class ArchivoSueldosCreateComponent extends DetailComponent implements OnInit {
  
  override entityName: string = "archivo_sueldos"

  override inputSearchGo: boolean = false

  override config: FormGroupConfig = new FormGroupConfig({
    periodo: new InputYmConfig({
      validatorMsgs: [ new RequiredValidatorMsg, ],
      required:true
    }),
    organo: new InputSelectConfig({
      validatorMsgs: [ new RequiredValidatorMsg, ],
      required:true
    }),
    tipo: new InputSelectLabelConfig({
      options:  [{id:"afiliacion",label:"Registro 40"}, {id:"tramite_excepcional", label:"Registro 80"}],
      validatorMsgs: [ new RequiredValidatorMsg, ],
      required:true
    })
  });

  override persist(): Observable<any> {
    return this.dd.post("create", this.entityName, this.serverData());
  }

  override reload(){
    console.log("visualizar lista de archivos creados ordenados de forma descendiente");
  }

  override optFooter: AbstractControlViewOption[] = [ //opciones de componente
    {
      config:new EventButtonConfig({
        text: "Aceptar", //texto del boton
        action: "submit", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.optField
      }),
    },
    {
      config:new EventIconConfig({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      }),
    },
    {
      config:new EventIconConfig({
        icon: "cached", //texto del boton
        action: "reset", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.optField
      }),
    },

  ];
}

