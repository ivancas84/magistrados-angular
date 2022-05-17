import { Component, OnInit } from "@angular/core";
import { FormArrayConfig, FormGroupConfig } from "@class/reactive-form-config";
import { DateValidatorMsg } from "@class/validator-msg";
import { ControlDateConfig } from "@component/control-date/control-date.component";
import { ControlLabelConfig } from "@component/control-label/control-label.component";
import { ControlValueConfig } from "@component/control-value/control-value.component";
import { FieldWrapRouterLinkConfig } from "@component/field-wrap-router-link/field-wrap-router-link.component";
import { InputSelectCheckboxConfig } from "@component/input-select-checkbox/input-select-checkbox.component";
import { InputSelectParamConfig } from "@component/input-select-param/input-select-param.component";
import { InputSelectConfig } from "@component/input-select/input-select.component";
import { InputYmConfig } from "@component/input-ym/input-ym.component";
import { TableComponent } from "@component/structure/table.component";

@Component({
    selector: 'app-tramite-excepcional-show',
    templateUrl: '../../core/component/structure/table.component.html',
})
export class TramiteExcepcionalShowComponent extends TableComponent implements OnInit{

  override entityName: string = "tramite_excepcional"
  override config: FormArrayConfig = new FormArrayConfig({
    persona: new FieldWrapRouterLinkConfig({
      config: new ControlLabelConfig({
        entityName: "persona",
      }),
      path: "persona-admin", 
      params:{id:"{{persona}})"}
    }),
    "per-legajo": new ControlValueConfig({
      label:"Legajo",
    }),
    organo: new ControlLabelConfig,
    codigo: new ControlValueConfig({
      label:"Cód",
    }),
    departamento_judicial: new ControlLabelConfig({
      label:"Departamento",
    }),
    desde: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    hasta: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    motivo: new ControlValueConfig,
    estado: new ControlValueConfig,
    monto: new ControlValueConfig,
    creado: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    enviado: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    evaluado: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    modificado: new ControlDateConfig({
      format: "MM/yyyy"
    }),
    
  })

  override searchConfig: FormGroupConfig = new FormGroupConfig({
      motivo:new InputSelectParamConfig({
        options:['Alta','Baja','Pendiente'],
      }),
      estado:new InputSelectParamConfig({
        options:['Creado','Enviado','Aprobado','Rechazado'],
      }),
      codigo:new InputSelectParamConfig({
        options:[161,162],
      }),
      "modificado.is_set":new InputSelectCheckboxConfig({
        label:"Está modificado?",
      }),
      departamento_judicial:new InputSelectConfig({
        label:"Departamento Judicial",
      }),
      departamento_judicial_informado:new InputSelectConfig({
        entityName:'departamento_judicial',
      }),
      organo:new InputSelectConfig,
      "per-cargo":new InputSelectConfig({
        label:"Cargo",
        entityName:"cargo",
      }),
      "creado.ym":new InputYmConfig({
        label:"Creado",
        validatorMsgs: [new DateValidatorMsg()],
      }),
      "enviado.ym":new InputYmConfig({
        label:"Enviado",
        validatorMsgs: [new DateValidatorMsg()],
      }),
      "evaluado.ym":new InputYmConfig({
        label:"Evaluado",
        validatorMsgs: [new DateValidatorMsg()],
      }),
      "modificado.ym":new InputYmConfig({
        label:"Modificado",
        validatorMsgs: [new DateValidatorMsg()],
      }),
    }
  )


  override serverSortTranslate = {
    "persona":["per-nombres","per-apellidos"],
    "departamento_judicial":["dj-codigo"],
    "organo":["org-descripcion"]
  }

  override serverSortObligatory = ["persona","departamento_judicial","organo"]

  
}

