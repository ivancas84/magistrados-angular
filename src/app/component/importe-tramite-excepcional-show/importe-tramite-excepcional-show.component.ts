import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Display } from '@class/display';
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from '@class/reactive-form-config';
import { DateValidatorMsg, RequiredValidatorMsg } from '@class/validator-msg';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlNumberConfig } from '@component/control-number/control-number.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
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
    "apellido":["afi_per-apellidos"],
    "nombres":["afi_per-nombres"],
    "legajo":["afi_per-legajo"],
    "departamento_judicial":["afi_dj-codigo"],
    "organo":["afi_org-descripcion"]
  }

  override serverSortObligatory = ["afi-departamento_judicial","afi-organo"]

  override config: FormArrayConfig = new FormArrayConfig({
      persona: new FormControlConfig,
        
      apellidos: new FieldWrapRouterLinkConfig({
        config: new ControlValueConfig,
        path: "persona-admin", 
        params:{id:"{{persona}})"}
      }),
      nombres: new ControlValueConfig,
      legajo: new ControlValueConfig,
      departamento_judicial: new ControlLabelConfig,
      organo: new ControlLabelConfig,
      codigo: new ControlValueConfig({
        label:"Cód",
      }),
      periodo: new ControlDateConfig({
        format: "dd/MM/yyyy"
      }),
      valor: new ControlNumberConfig,
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

  override footerConfig: FormGroupConfig = new FormGroupConfig({
      apellidos: new ControlValueConfig,
      nombres: new ControlValueConfig,
      periodo: new ControlValueConfig,
      valor: new ControlNumberConfig,
    }
  )

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
      switchMap(
        data =>  this.dd.getAllConnection(data, "persona", {"nombres":"nombres","apellidos":"apellidos","legajo":"legajo"})
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


  override setData(data: any[]){
    super.setData(data)
    this.footer!.controls["apellidos"].setValue("AFILIADOS")
    this.footer!.controls["nombres"].setValue(data.length)
    this.footer!.controls["periodo"].setValue("TOTAL")
    this.footer!.controls["valor"].setValue(   
      data.map((t: { [x: string]: any; }) => t["valor"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
    )  
  }

}

