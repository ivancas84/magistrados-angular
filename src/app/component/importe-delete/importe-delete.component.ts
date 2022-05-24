import { Component, OnInit } from '@angular/core';
import { FormGroupConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { Observable } from 'rxjs';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { DetailComponent } from '@component/structure/detail.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';

@Component({
  selector: 'app-archivo-sueldos-create',
  templateUrl: '../../core/component/structure/detail.component.html',
})
export class ImporteDeleteComponent extends DetailComponent implements OnInit {
  
  override entityName: string = "importe"

  override inputSearchGo: boolean = false

  override title: string = "Eliminar importes";

  
  override config: FormGroupConfig = new FormGroupConfig({
      "periodo": new InputYmConfig({
        validatorMsgs: [ new RequiredValidatorMsg, ],
      }),
      "organo": new InputSelectConfig({
        validatorMsgs: [ new RequiredValidatorMsg, ],
      }),
  })
  
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
  
  override persist(): Observable<any> {
    return this.dd._post("delete", this.entityName, this.serverData());
  }

  override reload(){
    console.log("Imprimir mensaje de importes eliminados");
  }

}

