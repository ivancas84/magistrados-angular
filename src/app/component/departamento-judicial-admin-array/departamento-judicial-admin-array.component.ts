import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FieldHiddenOptions, FieldInputTextOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { EventIconViewOptions, AbstractControlViewOptions, TableViewOptions, EventButtonViewOptions } from '@class/abstract-control-view-options';
import { FormArrayConfig, FormControlConfig, FormGroupConfig, AbstractControlOption, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg, UniqueValidatorMsg } from '@class/validator-msg';
import { ShowComponent } from '@component/show/show.component';
import { DepartamentoJudicialFormGroupFactory } from './departamento-judicial-form-group-factory.class';

@Component({
  selector: 'app-departamento-judicial-admin-array',
  templateUrl: '../../core/component/show/show.component.html',
})
export class DepartamentoJudicialAdminArrayComponent extends ShowComponent {
  readonly entityName: string = "departamento_judicial"

  nestedComponent: AbstractControlViewOptions = new TableViewOptions({
    title:"Departamento Judicial",
  })

  config: FormArrayConfig = new FormArrayConfig({
    factory:new DepartamentoJudicialFormGroupFactory(this.validators),  
    controls: {
      "id": new FormControlConfig({
        type: new FieldHiddenOptions
      }),
      "codigo": new FormControlConfig({
        label:"Código",
        type:new FieldInputTextOptions(),
        validatorMsgs: [new RequiredValidatorMsg, new UniqueValidatorMsg],
        showLabel:false
      }),
      "nombre": new FormControlConfig({
        label:"Nombre",
        type:new FieldInputTextOptions(),
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
          "_search":new FormControlConfig({
            label:"Buscar",
            type: new FieldInputTextOptions(),
            width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
          })
        }
      })
    }
  })

  optFooter = [
    new AbstractControlOption({
      viewOptions: new EventButtonViewOptions({
        text: "Aceptar", 
        action: "submit",
        color: "primary",
        fieldEvent: this.optField
      }),
      config:this.config,
      control:this.form
    }),
    new AbstractControlOption({
      viewOptions: new EventIconViewOptions({
        icon: "add", //texto del boton
        action: "add", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.nestedComponent["optField"]
      }),
      config:this.config,
      control:this.form
    }),
    new AbstractControlOption({
      viewOptions: new EventIconViewOptions({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      }),
      config:this.config,
      control:this.form
    }),
    new AbstractControlOption({
      viewOptions: new EventIconViewOptions({
        icon: "replay", //texto del boton
        action: "reset", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      }),
      config:this.config,
      control:this.form
    }),
  ]

  ngOnInit(){
    super.ngOnInit()
    this.nestedComponent["optColumn"] = [
      new AbstractControlOption({
        viewOptions:new EventIconViewOptions({
          action:"remove",
          fieldEvent:this.nestedComponent["optField"],
          icon:"delete"
        }),
        //control: se asignara el group del row de la tabla
      })
    ]
  }


  
}

