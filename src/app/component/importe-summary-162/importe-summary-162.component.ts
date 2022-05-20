import { Component } from '@angular/core';
import { FormArrayConfig, FormGroupConfig } from '@class/reactive-form-config';
import { Observable, of } from 'rxjs';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { map, startWith, switchMap } from 'rxjs/operators';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { TableComponent } from '@component/structure/table.component';

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteSummary162Component extends TableComponent {
  override entityName: string = "importe_162"

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
      afi_dj_nombre: new ControlValueConfig(),
      afi_org_descripcion: new ControlValueConfig(),
      afiliaciones: new ControlValueConfig(),
      importe: new ControlValueConfig(),
      cuota_asociativa: new ControlValueConfig(),
  })

  override config: FormArrayConfig = new FormArrayConfig({
      afi_dj_nombre: new ControlValueConfig({
        label:"Departamento",
      }),
      afi_org_descripcion: new ControlValueConfig({
        label:"Organo",
      }),
      afiliaciones: new ControlValueConfig({
        label:"Colegiados",
      }),
      importe: new ControlValueConfig,
      cuota_asociativa: new ControlValueConfig({
        label:"15%",
      }),
    }
  )

  override searchConfig: FormGroupConfig = new FormGroupConfig({
    "periodo":new InputYmConfig,
  })


  override initParams(params: any){ 
    this.params = params; 
    var p = (this.params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
    // this.config.controls["viatico"].params["periodo.ym"] = p;
  }


  initFooterData(){
    this.footer!.controls["afi_dj_nombre"].setValue("TOTAL")
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
      }
    );  
  }



}

