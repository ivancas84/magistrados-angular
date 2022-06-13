import { Component } from '@angular/core';
import { FormControlConfig, FormGroupConfig } from '@class/reactive-form-config';
import { Observable, of, switchMap } from 'rxjs';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { DetailComponent } from '@component/structure/detail.component';
import { FormGroup } from '@angular/forms';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { isEmptyObject } from '@function/is-empty-object.function';

@Component({
  selector: 'app-total-summary',
  templateUrl: './total-summary.component.html',
})
export class TotalSummaryComponent extends DetailComponent {
  searchControl!: FormGroup
  emptyData: boolean = true

  override entityName: string = "importe"


  override config: FormGroupConfig = new FormGroupConfig({
      "id": new FormControlConfig,
      "afiliaciones": new ControlValueConfig,
      "importe": new ControlValueConfig,
      "cuota_asociativa": new ControlValueConfig,
      "fam": new ControlValueConfig,
      "total_deduccion": new ControlValueConfig,
      "total_pagar": new ControlValueConfig,
      "total_pagar_letras": new ControlValueConfig,
      "viatico": new ControlValueConfig,
      "total": new ControlValueConfig,
  })

  searchConfig: FormGroupConfig = new FormGroupConfig({
    "periodo":new InputYmConfig,
    "departamento_judicial":new InputSelectConfig,
  })

  
  fecha!: string;
  periodo!: string
  id_departamento_judicial!: string
  departamento_judicial!: string


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
  
  override initParams(params: any){ 
    this.params = params
    var p = (params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
  }

  

  override ngOnInit(){
    var fecha = new Date()
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    this.fecha = monthNames[fecha.getMonth()]+" de "+fecha.getFullYear()
    super.ngOnInit();
    if(!this.searchControl) this.searchControl = new FormGroup({})
    this.searchConfig.initControl(this.searchControl)
  }

  override queryData(): Observable<any>{
    return this.dd.get("departamento_judicial", this.id_departamento_judicial).pipe(
      switchMap(
        departamento_judicial => {
            this.departamento_judicial = departamento_judicial["nombre"]
            return this.dd.post("info", this.entityName, this.display$.value.getParams()).pipe(
          )
        }
      )
    )
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
    this.id_departamento_judicial = p["departamento_judicial"]
  

    return this.queryData()
  }

  override setData(data: { [key: string]: any; }){
    if(!isEmptyObject(data)) {
      this.control.patchValue(data)
      this.emptyData = false;
    }
    else {
      this.emptyData = true;
    }
  }

 



}

