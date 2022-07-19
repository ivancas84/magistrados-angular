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
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputSelectLabelConfig } from '@component/input-select-label/input-select-label.component';

@Component({
  selector: 'app-registro-update',
  templateUrl: '../../core/component/structure/detail.component.html',
})
export class RegistroUpdateComponent extends DetailComponent implements OnInit {
  /**
   * Actualizar registros enviados para cargarlos como creados
   */
  
  override entityName: string = "importe"

  override inputSearchGo: boolean = false

  override title: string = "Actualizar registros enviados";

  override control: FormGroup =  new FormGroup({
      organo: new FormControl(null, {validators:Validators.required}),
      registro: new FormControl(null, {validators:Validators.required}),
  })
  
  override config: FormGroupConfig = new FormGroupConfig({
    organo: new InputSelectConfig({
      validatorMsgs: [ new RequiredValidatorMsg, ],
    }),
    registro: new InputSelectLabelConfig({
      options:  [{id:"afiliacion",label:"Registro 40"}, {id:"tramite_excepcional", label:"Registro 80"}],
      validatorMsgs: [ new RequiredValidatorMsg, ],
      required:true
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
    return this.dd._post("update", "registro", this.serverData());
  }

  override reload(){
    console.log("Imprimir mensaje de importes eliminados");
  }

}

