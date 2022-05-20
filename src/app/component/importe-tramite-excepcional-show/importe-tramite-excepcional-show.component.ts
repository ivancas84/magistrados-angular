import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Display } from '@class/display';
import { FieldWidthOptions } from '@class/field-width-options';
import { ConfigFormGroupFactory, FormArrayConfig, FormStructureConfig } from '@class/reactive-form-config';
import { DateValidatorMsg, RequiredValidatorMsg } from '@class/validator-msg';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { ShowComponent } from '@component/show/show.component';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';

@Component({
  selector: 'app-importe-tramite-excepcional-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ImporteTramiteExcepcionalShowComponent extends ShowComponent {

  readonly entityName: string = "importe_tramite_excepcional";

  config: FormArrayConfig = new TableDynamicConfig(
    {
      title:"Importes Registro 80",
      serverSortTranslate:{
          "te-persona":["te_per-nombres","te_per-apellidos"],
          "te-departamento_judicial":["te_dj-codigo"],
          "te-organo":["te_org-descripcion"]
      },
      serverSortObligatory:["te-persona","te-departamento_judicial","te-organo"],
    },
    {
      "te-persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          label:"Persona",
          entityName:"persona"
        }),
        path: "persona-admin", 
        params:{id:"{{te-persona}})"}
      }),
      "te_per-legajo": new ControlValueConfig({
        label:"Legajo",
      }),
      "te-departamento_judicial": new ControlLabelConfig({
        label:"Departamento Judicial",
        entityName:"departamento_judicial"
      }),
      "te-organo": new ControlLabelConfig({
        label:"Organo",
        entityName:"organo"
      }),
      "te-codigo": new ControlValueConfig({
        label:"Cód",
      }),
      "periodo": new ControlDateConfig({
        label:"Periodo",
        format: "dd/MM/yyyy"
      }),
      "valor": new ControlValueConfig({
        label:"Valor",
      }),
    }
  )

  searchForm = this.fb.group({
    "params":this.fb.group({
      "periodo.ym": [null, {
        validators: [Validators.required],
      }],
      "te-departamento_judicial": [null, {
      }],
      "te-organo": [null, {
      }],
 
    })
  })

  searchConfig = new FormStructureConfig({},
    {
      "params": new FieldsetDynamicConfig({},{
        "periodo.ym": new InputYmConfig({
          label:"Período",
          width:new FieldWidthOptions,
          validatorMsgs:[new DateValidatorMsg,new RequiredValidatorMsg]
        }),
        "te-departamento_judicial": new InputSelectConfig({
          label:"Departamento Judicial",
          entityName:"departamento_judicial",
          width:new FieldWidthOptions
        }),
        "te-organo": new InputSelectConfig({
          label:"Organo",
          entityName:"organo",
          width:new FieldWidthOptions
        }),
      })
    }
    
  )
  initDisplay() {
    var display = new Display();
    display.setSize(0);
    display.setParamsByQueryParams(this.params);
    this.display$.next(display)
  }

  ngOnInit(){
    this.config.factory = new ConfigFormGroupFactory(this.config)
    super.ngOnInit()
  }
}

