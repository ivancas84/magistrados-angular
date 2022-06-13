import { Component } from '@angular/core';
import { Display } from '@class/display';
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from '@class/reactive-form-config';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { TableComponent } from '@component/structure/table.component';
import { switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteAfiliacionShowComponent extends TableComponent {

  override entityName: string = "importe_afiliacion";

  override title: string = "Importes Registro 40"

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
      valor: new ControlValueConfig,
    }
  )

  override footerConfig: FormGroupConfig = new FormGroupConfig({
      apellidos: new ControlValueConfig,
      nombres: new ControlValueConfig,
      periodo: new ControlValueConfig,
      valor: new ControlValueConfig,
    }
  )

  override searchConfig = new FormGroupConfig({
        "periodo.ym": new InputYmConfig({
          label:"Período",
        }),
        "afi-departamento_judicial": new InputSelectConfig,
        "afi-organo": new InputSelectConfig,
        "afi-codigo": new InputSelectParamConfig({
          options:[161,162],
        }),
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
        data =>  this.dd.getAllConnection(data, "afiliacion", {"persona":"persona","departamento_judicial":"departamento_judicial","organo":"organo","codigo":"codigo"}, "afiliacion")
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

