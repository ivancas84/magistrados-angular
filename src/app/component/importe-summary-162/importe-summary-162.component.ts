import { Component } from '@angular/core';
import { FormArrayConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { ShowComponent } from '@component/show/show.component';
import { ImporteSummary162FormGroupFactory } from './importe-summary-162-form-group-factory.class';
import { Observable, of } from 'rxjs';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { debounceTime } from 'rxjs/operators';
import { FormGroup, Validators } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class ImporteSummary162Component extends ShowComponent {
  readonly entityName: string = "importe_162"
  loadLength: boolean = false; 

  queryData(): Observable<any>{
    if(!this.display$.value.hasOwnProperty("params")) return of([]);
    return this.dd.post("info", this.entityName, this.display$.value.getParams());
  }
    
  footerConfig: FormGroupConfig = new FieldsetDynamicConfig({
    controls:{
      "nombre": new ControlValueConfig(),
      "afiliaciones": new ControlValueConfig(),
      "importe": new ControlValueConfig(),
      "cuota_asociativa": new ControlValueConfig(),
      "fam": new ControlValueConfig(),
      "total_deduccion": new ControlValueConfig(),
      "total_pagar": new ControlValueConfig(),
      "viatico": new ControlValueConfig(),
      "total": new ControlValueConfig(),

    }
  })

  config: FormArrayConfig = new TableDynamicConfig({
    footerConfig:this.footerConfig,
    factory:new ImporteSummary162FormGroupFactory,  
    controls: {
      "nombre": new ControlValueConfig({
        label:"Departamento",
      }),
      "afiliaciones": new ControlValueConfig({
        label:"Colegiados",
      }),
      "importe": new ControlValueConfig({
        label:"Importe",
      }),
      "cuota_asociativa": new ControlValueConfig({
        label:"15%",
      }),
      "fam": new ControlValueConfig({
        label:"FAM",
      }),
      "total_deduccion": new ControlValueConfig({
        label:"Total deduccion",
      }),
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
    }
  })

  searchForm: FormGroup = this.fb.group({
    "params":this.fb.group({
      "periodo":this.fb.control(null,{validators: [Validators.required]}),
    })
  })

  searchConfig: FormStructureConfig = new FormStructureConfig({
    controls:{
      "params":new FieldsetDynamicConfig({
        controls: {
          "periodo":new InputYmConfig({
            label:"Periodo",
            width:new FieldWidthOptions()
          }),
        }
      })
    }
  })


  ngOnInit(){
    super.ngOnInit()
    this.initFooter()
  }

  initParams(params: any){ 
    this.params = params; 
    var p = (this.params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
    this.config.controls["viatico"].params["periodo.ym"] = p;
  }


  initFooter(){
    this.config.footer = this.config.factory.formGroup()
    this.config.footer.controls["nombre"].setValue("TOTAL")
    this.form.valueChanges.pipe(
      debounceTime(100),
    ).subscribe(
      value => {
        this.config.footer.controls["afiliaciones"].setValue(   
          value.map(t => t["afiliaciones"]).reduce((acc, value) => acc + value, 0)
        )
        this.config.footer.controls["importe"].setValue(   
          value.map(t => t["importe"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["cuota_asociativa"].setValue(   
          value.map(t => t["cuota_asociativa"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["fam"].setValue(   
          value.map(t => t["fam"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["total_deduccion"].setValue(   
          value.map(t => t["total_deduccion"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["total_pagar"].setValue(   
          value.map(t => t["total_pagar"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["viatico"].setValue(   
          value.map(t => t["viatico"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
        this.config.footer.controls["total"].setValue(   
          value.map(t => t["total"]).reduce((acc, value) => acc + value, 0).toFixed(2)
        )
      }
    );  
  }



}

