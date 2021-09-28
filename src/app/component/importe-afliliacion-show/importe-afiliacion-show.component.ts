import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Display } from '@class/display';
import { FieldWidthOptions } from '@class/field-width-options';
import { ConfigFormGroupFactory, FormArrayConfig, FormStructureConfig } from '@class/reactive-form-config';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputDateConfig } from '@component/input-date/input-date.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { ShowComponent } from '@component/show/show.component';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ImporteAfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "importe_afiliacion";

  config: FormArrayConfig = new TableDynamicConfig(
    {
      title:"Importes Registro 40",
      serverSortTranslate:{
          "afi-persona":["afi_per-nombres","afi_per-apellidos"],
          "afi-departamento_judicial":["afi_dj-codigo"],
          "afi-organo":["afi_org-descripcion"]
      },
      serverSortObligatory:["afi-persona","afi-departamento_judicial","afi-organo"],
    },
    {
      "afi-persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          label:"Persona",
          entityName:"persona"
        }),
        path: "persona-admin", 
        params:{id:"{{afi-persona}})"}
      }),
      "afi_per-legajo": new ControlValueConfig({
        label:"Legajo",
      }),
      "afi-departamento_judicial": new ControlLabelConfig({
        label:"Departamento Judicial",
        entityName:"departamento_judicial"
      }),
      "afi-organo": new ControlLabelConfig({
        label:"Organo",
        entityName:"organo"
      }),
      "afi-codigo": new ControlValueConfig({
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
      "afi-departamento_judicial": [null, {
      }],
      "afi-organo": [null, {
      }],
      "afi-codigo": [null, {
      }],
    })
  })

  searchConfig = new FormStructureConfig({},
    {
      "params": new FieldsetDynamicConfig({},{
        "periodo.ym": new InputYmConfig({
          label:"Período",
          width:new FieldWidthOptions
        }),
        "afi-departamento_judicial": new InputSelectConfig({
          label:"Departamento Judicial",
          entityName:"departamento_judicial",
          width:new FieldWidthOptions
        }),
        "afi-organo": new InputSelectConfig({
          label:"Organo",
          entityName:"organo",
          width:new FieldWidthOptions
        }),
        "afi-codigo": new InputSelectParamConfig({
          label:"Código",
          options:[161,162],
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

