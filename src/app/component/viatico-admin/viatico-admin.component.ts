import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormGroupConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { DetailComponent } from '@component/structure/detail.component';
import { isEmptyObject } from '@function/is-empty-object.function';
import { ValidatorsService } from '@service/validators/validators.service';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/structure/detail.component.html',
})
export class ViaticoAdminComponent extends DetailComponent implements OnInit{
  
  override entityName: string = "viatico"
  override inputSearchGo: boolean = false;

  override control: FormGroup = new FormGroup({
    periodo:new FormControl(null, {validators: [Validators.required]}),
    departamento_judicial:new FormControl(null, {validators: [Validators.required]}),
    valor:new FormControl(null, {validators: [Validators.required, ValidatorsService.real(2)]}),
  })

  override config: FormGroupConfig = new FormGroupConfig({
      periodo: new InputYmConfig({
        validatorMsgs: [ new RequiredValidatorMsg, ],
        width:new FieldWidthOptions({gtSm:"34%"}),
        default:moment(),
      }),
      departamento_judicial: new InputSelectConfig({
        validatorMsgs: [ new RequiredValidatorMsg, ],
        width:new FieldWidthOptions({gtSm:"34%"}),
      }),
      valor: new InputTextConfig({
        validatorMsgs: [ new RequiredValidatorMsg, ],
      }),
    }
  )

  override reload(){
    this.back();
  }

  override initData(): Observable<any> {
    /**
     * Para realizar la consulta por campos unicos se utiliza un parametro con funcion, 
     * si en el resultado final de la consulta de datos existe ese parametro debe renombrarse
     */

    if(!isEmptyObject(this.display$.value)) {
      return this.queryData().pipe(
        map(
          response => {
            if(!response) return {}
            //if(response.hasOwnProperty("periodo")) response["viatico"]["periodo.ym"] = response["viatico"]["periodo"]
            if(response.hasOwnProperty("periodo.ym")) response["viatico"]["periodo"] = response["viatico"]["periodo.ym"]
            return response;
          }
        )
      )
    } else return of({});
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

