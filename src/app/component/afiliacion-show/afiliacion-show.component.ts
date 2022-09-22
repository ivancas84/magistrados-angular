import { Component, OnInit } from "@angular/core";
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from "@class/reactive-form-config";
import { DateValidatorMsg } from "@class/validator-msg";
import { AbstractControlViewOption } from "@component/abstract-control-view/abstract-control-view.component";
import { ControlDateConfig } from "@component/control-date/control-date.component";
import { ControlLabelConfig } from "@component/control-label/control-label.component";
import { ControlValueConfig } from "@component/control-value/control-value.component";
import { EventIconConfig } from "@component/event-icon/event-icon.component";
import { FieldWrapRouterLinkConfig } from "@component/field-wrap-router-link/field-wrap-router-link.component";
import { InputSelectCheckboxConfig } from "@component/input-select-checkbox/input-select-checkbox.component";
import { InputSelectParamConfig } from "@component/input-select-param/input-select-param.component";
import { InputSelectConfig } from "@component/input-select/input-select.component";
import { InputYmConfig } from "@component/input-ym/input-ym.component";
import { TableComponent } from "@component/structure/table.component";
import { Observable, switchMap, tap } from "rxjs";

@Component({
    selector: 'app-afiliacion-show',
    templateUrl: '../../core/component/structure/table.component.html',
})
export class AfiliacionShowComponent extends TableComponent implements OnInit{


  override entityName: string = "afiliacion"
  override title: string = "Registros 40"
  override config: FormArrayConfig = new FormArrayConfig({
    persona: new FormControlConfig,
    apellidos: new FieldWrapRouterLinkConfig({
      config: new ControlValueConfig,
      path: "persona-admin", 
      params:{id:"{{persona}})"}
    }),
    nombres: new FieldWrapRouterLinkConfig({
      config: new ControlValueConfig,
      path: "persona-admin", 
      params:{id:"{{persona}})"}
    }),
    legajo: new ControlValueConfig,
    organo: new ControlLabelConfig,
    codigo: new ControlValueConfig({
      label:"Cód",
    }),
    departamento_judicial: new ControlLabelConfig({
      label:"Departamento",
    }),
    motivo: new ControlValueConfig,
    estado: new ControlValueConfig,
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
        options:[161,162,1621,1622],
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
    "nombres":["per-nombres"],
    "apellidos":["per-apellidos"],
    "legajo":["per-legajo"],
    "departamento_judicial":["dj-codigo"],
    "organo":["org-descripcion"]
  }

  override serverSortObligatory = ["departamento_judicial","organo"]

  
  override initData(): Observable<any>{
    return super.initData().pipe(
      switchMap(
        data => this.dd.getAllConnection(data, "persona", {"nombres":"nombres", "apellidos":"apellidos", "legajo":"legajo"})
      ),
    )

  }

  override optTitle: AbstractControlViewOption[] = [
    {
      config: new EventIconConfig({
        icon: "content_copy", //icono del boton
        action: "copy_content", //accion del evento a realizar
        fieldEvent: this.optField,
        title: "Copiar"
      })
    },
    {
      config: new EventIconConfig({
        icon: "print", //icono del boton
        action: "print_content", //accion del evento a realizar
        fieldEvent: this.optField,
        title: "Imprimir"
      })
    },

  ]; 
}

