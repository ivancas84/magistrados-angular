import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormArrayConfig, FormStructureConfig } from '@class/reactive-form-config';
import { ShowComponent } from '@component/show/show.component';
import { AfiliacionFormGroupFactory } from './afiliacion-form-group-factory.class';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { FieldWidthOptions } from '@class/field-width-options';
import { InputSelectCheckboxConfig } from '@component/input-select-checkbox/input-select-checkbox.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { DateValidatorMsg } from '@class/validator-msg';

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class AfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "afiliacion"

  config: FormArrayConfig = new TableDynamicConfig({
    factory:new AfiliacionFormGroupFactory,  
    title:"Registro 40",
    serverSortTranslate:{
        "persona":["per-nombres","per-apellidos"],
        "departamento_judicial":["dj-codigo"],
        "organo":["org-descripcion"]
    },
    serverSortObligatory:["persona","departamento_judicial","organo"],
    controls: {
      "persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          entityName: "persona",
          label:"Persona",
        }),
        path: "persona-admin", 
        params:{id:"{{persona}})"}
      }),
      "per-legajo": new ControlValueConfig({
        label:"Legajo",
      }),
      "organo": new ControlLabelConfig({
        label:"Organo",
        entityName:"organo"
      }),
      "codigo": new ControlValueConfig({
        label:"Cód",
      }),
      "departamento_judicial": new ControlLabelConfig({
        label:"Departamento",
        entityName:"departamento_judicial"
      }),
      "motivo": new ControlValueConfig({
        label:"Motivo",
      }),
      "estado": new ControlValueConfig({
        label:"Estado",
      }),
      "creado": new ControlDateConfig({
        label:"Creado",
        format: "MM/yyyy"
      }),
      "enviado": new ControlDateConfig({
        label:"Enviado",
        format: "MM/yyyy"
      }),
      "evaluado": new ControlDateConfig({
        label:"Evaluado",
        format: "MM/yyyy"
      }),
      "modificado": new ControlDateConfig({
        label:"Modificado",
        format: "MM/yyyy"
      }),
      
    }
  })

  // searchForm: FormGroup = new FormGroup({
  //   "params": new FormGroup({
  //     //"_search": new FormControl(null)
  //     "motivo": new FormControl(null),
  //     "estado": new FormControl(null),
  //     "modificado.is_set": new FormControl(null),
  //     "departamento_judicial": new FormControl(null),
  //     "departamento_judicial_informado": new FormControl(null),
  //     "organo": new FormControl(null),
  //     "per-cargo": new FormControl(null),
  //     "creado.ym": new FormControl(null),
  //     "enviado.ym": new FormControl(null),
  //     "evaluado.ym": new FormControl(null),
  //     "modificado.ym": new FormControl(null),

  //   })
  // })

  searchConfig: FormStructureConfig = new FormStructureConfig({
    controls:{
      "params":new FieldsetDynamicConfig({
        controls:{
          // "_search":new FormControlConfig({
          //   label:"Buscar",
          //   type: new FieldInputTextOptions(),
          //   width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
          // })
          "motivo":new InputSelectParamConfig({
            position:1,
            label:"Motivo",
            options:['Alta','Baja','Pendiente'],
          }),
          "estado":new InputSelectParamConfig({
            position:2,
            label:"Estado",
            options:['Creado','Enviado','Aprobado','Rechazado'],
          }),
          "codigo":new InputSelectParamConfig({
            position:4,
            options:[161,162],
            label:"Código",
          }),
          "modificado.is_set":new InputSelectCheckboxConfig({
            position:5,
            label:"Está modificado?",
          }),
          "departamento_judicial":new InputSelectConfig({
            position:6,
            label:"Departamento Judicial",
            entityName:'departamento_judicial',

          }),
          "departamento_judicial_informado":new InputSelectConfig({
            position:7,
            label:"Departamento Judicial Informado",
            entityName:'departamento_judicial',
            width: new FieldWidthOptions(),
          }),
          "organo":new InputSelectConfig({
            position:8,
            label:"Organo",
            entityName:'organo',
            width: new FieldWidthOptions(),
          }),
          "per-cargo":new InputSelectConfig({
            position:9,
            label:"Cargo",
            entityName:"cargo",
            width: new FieldWidthOptions(),
          }),
          "creado.ym":new InputYmConfig({
            position:10,
            label:"Creado",
            validatorMsgs: [new DateValidatorMsg()],
            width: new FieldWidthOptions(),
          }),
          "enviado.ym":new InputYmConfig({
            position:11,
            label:"Enviado",
            validatorMsgs: [new DateValidatorMsg()],
            width: new FieldWidthOptions(),
          }),
          "evaluado.ym":new InputYmConfig({
            position:12,
            label:"Evaluado",
            validatorMsgs: [new DateValidatorMsg()],
            width: new FieldWidthOptions(),
          }),
          "modificado.ym":new InputYmConfig({
            position:13,
            label:"Modificado",
            validatorMsgs: [new DateValidatorMsg()],
            width: new FieldWidthOptions(),
          }),
        }
      })
    }
  })



}

