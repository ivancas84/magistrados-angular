import { Component } from '@angular/core';
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from '@class/reactive-form-config';
import { Observable, of } from 'rxjs';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { map, startWith, switchMap } from 'rxjs/operators';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { TableComponent } from '@component/structure/table.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';

@Component({
  selector: 'app-importe-summary',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteSummaryComponent extends TableComponent {
  override entityName: string = "importe"

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
  
  override initData(): Observable<any>{
    if(!this.display$.value.hasOwnProperty("params")) return of([]);
    return this.dd.post("info", this.entityName, this.display$.value.getParams());
  }

  override loadDisplay(){
    /**
     * Se define un load independiente para el display, es util para reasignar
     * valores directamente al display y reinicializar por ejemplo al limpiar
     * o resetear el formulario
     */
    this.loadDisplay$ = this.display$.pipe(
      switchMap(
        () =>   {
          this.load = true;
          return this.initData()
        }
      ),
      map(
        data => {
          this.setData(data)
          this.initFooterData();
          return this.load = true;
        }
      ),
    )
  }
    
  override footerConfig: FormGroupConfig = new FormGroupConfig({
      nombre: new ControlValueConfig(),
      afiliaciones: new ControlValueConfig(),
      importe: new ControlValueConfig(),
      cuota_asociativa: new ControlValueConfig(),
      fam: new ControlValueConfig(),
      total_deduccion: new ControlValueConfig(),
      total_pagar: new ControlValueConfig(),
      viatico: new ControlValueConfig(),
      total: new ControlValueConfig(),
  })

  override config: FormArrayConfig = new FormArrayConfig({
      "id": new FormControlConfig,
      "nombre": new ControlValueConfig({
        label:"Departamento",
      }),
      "afiliaciones": new ControlValueConfig({
        label:"Colegiados",
      }),
      "importe": new ControlValueConfig,
      "cuota_asociativa": new ControlValueConfig({
        label:"15%",
      }),
      "fam": new ControlValueConfig({
        label:"FAM",
      }),
      "total_deduccion": new ControlValueConfig,
      "total_pagar": new ControlValueConfig({
        label:"Total a pagar",
      }),
      "viatico": new FieldWrapRouterLinkConfig({
        label:"Viático",
        params: {departamento_judicial:"{{id}}"}, //utilizar {{key}} para identificar valor del conjunto de datos
        path:"viatico-admin",
        config:new ControlValueConfig({
          label:"Viático",
        })
      }),
      "total": new ControlValueConfig({
        label:"TOTAL",
      }),
  })

  override searchConfig: FormGroupConfig = new FormGroupConfig({
    "periodo":new InputYmConfig,
  })



  override initParams(params: any){ 
    this.params = params; 
    var p = (this.params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
    this.config.controls["viatico"]["params"]["periodo.ym"] = p;
  }


  initFooterData(){
    this.footer!.controls["nombre"].setValue("TOTAL")

    this.control.valueChanges.pipe(
      startWith(this.control.value),
    ).subscribe(
      value => {
        this.footer!.controls["afiliaciones"].setValue(   
          value.map((t: { [x: string]: any; }) => t["afiliaciones"]).reduce((acc: any, value: any) => acc + value, 0)
        )
        this.footer!.controls["importe"].setValue(   
          value.map((t: { [x: string]: any; }) => t["importe"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["cuota_asociativa"].setValue(   
          value.map((t: { [x: string]: any; }) => t["cuota_asociativa"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["fam"].setValue(   
          value.map((t: { [x: string]: any; }) => t["fam"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["total_deduccion"].setValue(   
          value.map((t: { [x: string]: any; }) => t["total_deduccion"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["total_pagar"].setValue(   
          value.map((t: { [x: string]: any; }) => t["total_pagar"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["viatico"].setValue(   
          value.map((t: { [x: string]: any; }) => t["viatico"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
        this.footer!.controls["total"].setValue(   
          value.map((t: { [x: string]: any; }) => t["total"]).reduce((acc: any, value: any) => acc + value, 0).toFixed(2)
        )
      }
    );  
      
  }



}

