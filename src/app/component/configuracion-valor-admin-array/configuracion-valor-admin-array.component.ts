import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormArrayConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { DateValidatorMsg, PatternValidatorMsg, RequiredValidatorMsg } from '@class/validator-msg';
import { ShowComponent } from '@component/show/show.component';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { ConfiguracionValorFormGroupFactory } from './configuracion-valor-form-group-factory.class';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { Display } from '@class/display';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';


@Component({
  selector: 'app-configuracion-valor-admin-array',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ConfiguracionValorAdminArrayComponent extends ShowComponent {
  readonly entityName: string = "configuracion_valor"

  config: FormArrayConfig = new TableDynamicConfig({
    factory:new ConfiguracionValorFormGroupFactory(this.validators),  
    controls: {
      "nombre": new InputSelectParamConfig({
        label:"Nombre",
        validatorMsgs: [new RequiredValidatorMsg],
        showLabel:false,
        options:["FAM","Cuota Asociativa"]
      }),
      "desde": new InputYmConfig({
        label:"Desde",
        validatorMsgs: [new RequiredValidatorMsg, new DateValidatorMsg],
        showLabel:false
      }),
      "valor": new InputTextConfig({
        label:"Valor",
        validatorMsgs: [new RequiredValidatorMsg, new PatternValidatorMsg],
        showLabel:false
      }),
    }
  })

  searchForm: FormGroup = new FormGroup({
    "params": new FormGroup({
      "_search": new FormControl(null)
    })
  })

  searchConfig: FormStructureConfig = new FormStructureConfig({
    controls:{
      "params":new FieldsetDynamicConfig({
        controls:{
          "_search":new InputTextConfig({
            label:"Buscar",
            width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
          })
        }
      })
    }
  })

  optFooter: AbstractControlViewOption[] = [
    { config: new EventButtonConfig({
        text: "Aceptar", 
        action: "submit",
        color: "primary",
        fieldEvent: this.optField
      }),
    },
    {
      config: new EventIconConfig({
        icon: "add", //texto del boton
        action: "add", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.config.optField
      })
    },
    {
      config: new EventIconConfig({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      })
    },
    {
      config: new EventIconConfig({
        icon: "autorenew", //texto del boton
        action: "reset", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      })
    },
  ]

  ngOnInit(){
    super.ngOnInit()
    this.config.optColumn = [
      { 
        config: new EventIconConfig({
          action:"remove",
          color: "accent",
          fieldEvent:this.config.optField,
          icon:"delete"
        }),
      }
    ]
  }

  initDisplay() {
    var display = new Display();
    display.setSize(100);
    display.setParamsByQueryParams(this.params);
    display.setOrder({desde:"desc"})
    this.display$.next(display)
  }
  
}

