import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormArrayConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg, UniqueValidatorMsg } from '@class/validator-msg';
import { ShowComponent } from '@component/show/show.component';
import { SucursalFormGroupFactory } from './sucursal-form-group-factory.class';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';


@Component({
  selector: 'app-sucursal-admin-array',
  templateUrl: '../../core/component/show/show.component.html',
})
export class SucursalAdminArrayComponent extends ShowComponent {
  readonly entityName: string = "sucursal"

  config: FormArrayConfig = new TableDynamicConfig({
    factory:new SucursalFormGroupFactory(this.validators),  
    controls: {
      "descripcion": new InputTextConfig({
        label:"Descripción",
        validatorMsgs: [new RequiredValidatorMsg, new UniqueValidatorMsg],
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
      "params":new FormGroupConfig({
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


  
}

