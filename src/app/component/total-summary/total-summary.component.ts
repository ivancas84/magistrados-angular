import { Component } from '@angular/core';
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from '@class/reactive-form-config';
import { Observable, of } from 'rxjs';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { map, switchMap } from 'rxjs/operators';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { DetailComponent } from '@component/structure/detail.component';
import { FormGroup } from '@angular/forms';
import { isEmptyObject } from '@function/is-empty-object.function';

@Component({
  selector: 'app-total-summary',
  templateUrl: './total-summary.component.html',
})
export class TotalSummaryComponent extends DetailComponent {
  searchControl!: FormGroup

  override entityName: string = "importe"

  override config: FormGroupConfig = new FormGroupConfig({
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

  searchConfig: FormGroupConfig = new FormGroupConfig({
    "periodo":new InputYmConfig,
    "departamento_judicial":new InputSelectConfig,
  })


  periodo!: string
  departamento_judicial!: string

  override initParams(params: any){ 
    this.params = params
    var p = (params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
    this.config.controls["viatico"]["params"]["periodo.ym"] = p;
  }

  override initData(): Observable<any> {
    if(!this.params.hasOwnProperty("params")) return of({})
    
    var p = JSON.parse(decodeURI(this.params["params"]))
    if(
      !p.hasOwnProperty("periodo") 
      ||
      !p.hasOwnProperty("departamento_judicial")       
    ) return of({})

    this.periodo = p["periodo"]

    return this.queryData()
  }

  override ngOnInit(){
    super.ngOnInit();
    if(!this.searchControl) this.searchControl = new FormGroup({})
    this.searchConfig.initControl(this.searchControl)
  }

  override queryData(): Observable<any>{
    console.log("test")
    return this.dd.post("info", this.entityName, this.display$.value.getParams());
  }

 



}

