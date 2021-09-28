import { Component } from '@angular/core';
import { ConfigFormGroupFactory, FormArrayConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
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
    
  footerConfig: FormGroupConfig = new FieldsetDynamicConfig({},
    {
      "afi_dj_nombre": new ControlValueConfig(),
      "afi_org_descripcion": new ControlValueConfig(),
      "afiliaciones": new ControlValueConfig(),
      "importe": new ControlValueConfig(),
      "cuota_asociativa": new ControlValueConfig(),
    }
  )

  config: FormArrayConfig = new TableDynamicConfig(
    {
      footerConfig:this.footerConfig,
      // factory:new ImporteSummary162FormGroupFactory,  
    },
    {
      "afi_dj_nombre": new ControlValueConfig({
        label:"Departamento",
      }),
      "afi_org_descripcion": new ControlValueConfig({
        label:"Organo",
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
    }
  )

  searchForm: FormGroup = this.fb.group({
    "params":this.fb.group({
      "periodo":this.fb.control(null,{validators: [Validators.required]}),
    })
  })

  searchConfig: FormStructureConfig = new FormStructureConfig({},
    {
      "params":new FieldsetDynamicConfig({},
        {
          "periodo":new InputYmConfig({
            label:"Periodo",
            width:new FieldWidthOptions()
          }),
        }
      )
    }
  )


  ngOnInit(){
    this.config.factory = new ConfigFormGroupFactory(this.config)
    super.ngOnInit()
    this.initFooter()
  }

  initParams(params: any){ 
    this.params = params; 
    var p = (this.params.hasOwnProperty("periodo")) ? this.params["periodo"] : JSON.parse(decodeURI(this.params["params"]))["periodo"]
    // this.config.controls["viatico"].params["periodo.ym"] = p;
  }


  initFooter(){
    this.config.footer = this.config.factory.formGroup()
    this.config.footer.controls["afi_dj_nombre"].setValue("TOTAL")
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
      }
    );  
  }



}

