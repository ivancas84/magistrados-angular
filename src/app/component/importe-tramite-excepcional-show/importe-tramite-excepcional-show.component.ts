import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Display } from '@class/display';
import { FormArrayConfig, FormGroupConfig } from '@class/reactive-form-config';
import { DateValidatorMsg, RequiredValidatorMsg } from '@class/validator-msg';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { TableComponent } from '@component/structure/table.component';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-importe-tramite-excepcional-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteTramiteExcepcionalShowComponent extends TableComponent {

  override entityName: string = "importe_tramite_excepcional";

  override title: string = "Importes Registro 80"

  override serverSortTranslate = {
    "persona":["te_per-nombres","te_per-apellidos"],
    "departamento_judicial":["te_dj-codigo"],
    "organo":["te_org-descripcion"]
  }

  override serverSortObligatory = ["te-persona","te-departamento_judicial","te-organo"]

  override config: FormArrayConfig = new FormArrayConfig({
      "persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          entityName:"persona"
        }),
        path: "persona-admin", 
        params:{id:"{{persona}})"}
      }),
      "departamento_judicial": new ControlLabelConfig,
      "organo": new ControlLabelConfig,
      "codigo": new ControlValueConfig({
        label:"Cód",
      }),
      "periodo": new ControlDateConfig({
        format: "dd/MM/yyyy"
      }),
      "valor": new ControlValueConfig({
        label:"Valor",
      }),
    }
  )

  override searchControl = new FormGroup({
    "periodo.ym": new FormControl(null, {
       validators: [Validators.required],
    }),
  })

  override searchConfig = new FormGroupConfig({
        "periodo.ym": new InputYmConfig({
          label:"Período",
          validatorMsgs:[new DateValidatorMsg,new RequiredValidatorMsg]
        }),
        "te-departamento_judicial": new InputSelectConfig,
        "te-organo": new InputSelectConfig,
  })

  override initDisplay() {
    var display = new Display();
    display.setSize(0);
    display.setParamsByQueryParams(this.params);
    this.display$.next(display)
  }

  override initData(): Observable<any>{
    
    return this.dd.all(this.entityName, this.display$.value).pipe(
      switchMap(
        data =>  this.dd.getAllConnection(data, "tramite_excepcional", {"persona":"persona","departamento_judicial":"departamento_judicial","organo":"organo","codigo":"codigo"})
      ),
    )
  }

}

