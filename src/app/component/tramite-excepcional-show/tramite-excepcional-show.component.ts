import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AbstractControlViewOptions, TableViewOptions } from '@class/abstract-control-view-options';
import { FieldDateOptions, FieldHiddenOptions, FieldInputSelectCheckboxOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldInputYearMonthOptions, TypeLabelOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { RouterLinkOptions } from '@class/field-wrap-options';
import { FormArrayConfig, FormControlConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { DateValidatorMsg } from '@class/validator-msg';
import { ShowComponent } from '@component/show/show.component';
import { debounceTime, map } from 'rxjs/operators';
import { TramiteExcepcionalFormGroupFactory } from './tramite-excepcional-form-group-factory.class';

@Component({
  selector: 'app-tramite-excepcional-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class TramiteExcepcionalShowComponent extends ShowComponent {
  readonly entityName: string = "tramite_excepcional"

  config: FormArrayConfig = new FormArrayConfig({
    factory:new TramiteExcepcionalFormGroupFactory,  
    controls: {
      "id": new FormControlConfig({
        type: new FieldHiddenOptions
      }),
      "persona": new FormControlConfig({
        label:"Persona",
        type:new TypeLabelOptions({entityName: "persona"}),
        wrap:new RouterLinkOptions({path: "persona-admin", params:{id:"{{persona}})"}}), 
      }),
      "per-legajo": new FormControlConfig({
        field:"per-legajo",
        label:"Legajo",
      }),
      "codigo": new FormControlConfig({
        label:"Cód"
      }),
      "departamento_judicial": new FormControlConfig({
        label:"Departamento",
        type: new TypeLabelOptions({entityName:"departamento_judicial"})
      }),
      "desde": new FormControlConfig({
        label:"Desde",
        type: new FieldDateOptions({format: "MM/yyyy"})
      }),
      "hasta": new FormControlConfig({
        label:"Hasta",
        type: new FieldDateOptions({format: "MM/yyyy"})
      }),
      "motivo": new FormControlConfig({
        label:"Motivo"
      }),
      "estado": new FormControlConfig({
        label:"Estado"
      }),
      "monto": new FormControlConfig({
        label:"Monto"
      }),
      "creado": new FormControlConfig({
        label:"Creado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      "enviado": new FormControlConfig({
        label:"Enviado",
        type:new FieldDateOptions({format: "MM/yyyy"}) 
      }),
      "evaluado": new FormControlConfig({
        label:"Evaluado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      "modificado": new FormControlConfig({
        label:"Modificado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      "organo": new FormControlConfig({
        label:"Organo",
        type: new TypeLabelOptions({entityName:"organo"})
      }),
    }
  })

  searchForm: FormGroup = new FormGroup({
    "params": new FormGroup({
      //"_search": new FormControl(null)
      "motivo": new FormControl(null),
      "estado": new FormControl(null),
      "modificado.is_set": new FormControl(null),
      "departamento_judicial": new FormControl(null),
      "departamento_judicial_informado": new FormControl(null),
      "organo": new FormControl(null),
      "per-cargo": new FormControl(null),
      "creado.ym": new FormControl(null),
      "enviado.ym": new FormControl(null),
      "evaluado.ym": new FormControl(null),
      "modificado.ym": new FormControl(null),
    })
  })

  searchConfig: FormStructureConfig = new FormStructureConfig({
    controls:{
      "params":new FormGroupConfig({
        controls:{
          // "_search":new FormControlConfig({
          //   label:"Buscar",
          //   type: new FieldInputTextOptions(),
          //   width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
          // })
          "motivo":new FormControlConfig({
            position:1,
            label:"Motivo",
            type: new FieldInputSelectParamOptions({options:['Alta','Baja','Pendiente']}),
            width: new FieldWidthOptions({gtSm:'33%'}),
          }),
          "estado":new FormControlConfig({
            position:2,
            label:"Estado",
            type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
            width: new FieldWidthOptions({gtSm:'33%'}),
          }),
          "modificado.is_set":new FormControlConfig({
            position:3,
            label:"Está modificado?",
            type: new FieldInputSelectCheckboxOptions(),
            width: new FieldWidthOptions({gtSm:'34%'}),
          }),
          "departamento_judicial":new FormControlConfig({
            position:4,
            label:"Departamento Judicial",
            type: new FieldInputSelectOptions({entityName:'departamento_judicial'}),
          }),
          "departamento_judicial_informado":new FormControlConfig({
            position:5,
            label:"Departamento Judicial Informado",
            type: new FieldInputSelectOptions({entityName:'departamento_judicial'}),
          }),
          "organo":new FormControlConfig({
            position:6,
            label:"Organo",
            type: new FieldInputSelectOptions({entityName:'organo'}),
          }),
          "per-cargo":new FormControlConfig({
            position:7,
            label:"Cargo",
            type: new FieldInputSelectOptions({entityName:"cargo"}),
          }),
          "creado.ym":new FormControlConfig({
            position:8,
            label:"Creado",
            type: new FieldInputYearMonthOptions(),
            validatorMsgs: [new DateValidatorMsg()]
          }),
          "enviado.ym":new FormControlConfig({
            position:9,
            label:"Enviado",
            type: new FieldInputYearMonthOptions(),
            validatorMsgs: [new DateValidatorMsg()]
          }),
          "evaluado.ym":new FormControlConfig({
            position:10,
            label:"Evaluado",
            type: new FieldInputYearMonthOptions(),
            validatorMsgs: [new DateValidatorMsg()]
          }),
          "modificado.ym":new FormControlConfig({
            position:11,
            label:"Modificado",
            type: new FieldInputYearMonthOptions(),
            validatorMsgs: [new DateValidatorMsg()]
          }),
        }
      })
    }
  })

  // footer = this.config.factory.formGroup()
  // footerConfig: FormGroupConfig = new FormGroupConfig({
  //   controls:{
  //     "monto": new FormControlConfig()
  //   }
  // })
  
  nestedComponent: AbstractControlViewOptions = new TableViewOptions({
    title:"Registro 80",
    serverSortTranslate:{
      "persona":["per-nombres","per-apellidos"],
      "departamento_judicial":["dj-codigo"],
      "organo":["org-descripcion"]
    },
    serverSortObligatory:["persona","departamento_judicial","organo"],
    config:this.config,
    fieldset:this.form,
    //footer:this.footer
    //footerConfig:this.footerConfig,
  })

  
  ngOnInit(){
    super.ngOnInit()
    // this.form.valueChanges.pipe(
    //   debounceTime(100),
    // ).subscribe(
    //   value => {
    //     this.footer.controls["monto"].setValue(   
    //       value.map(t => t["monto"]).reduce((acc, value) => acc + value, 0).toFixed(2)
    //    )
    //   }
    // );
  }
}

