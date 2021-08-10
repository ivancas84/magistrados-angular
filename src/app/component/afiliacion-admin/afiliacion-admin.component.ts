import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ComponentOptions } from '@class/component-options';
import { FieldHiddenOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldLabelOptions, FieldTextareaOptions, TypeLabelOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { FieldsetDynamicOptions } from '@class/fieldset-dynamic-options';
import { FormControlConfig, FormControlOption, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { FormGroupExt, FormControlExt } from '@class/reactive-form-ext';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class AfiliacionAdminComponent extends AdminComponent implements OnInit{
  
  readonly entityName: string = "afiliacion"
  inputSearchGo: boolean = false;


  adminForm: FormGroup = this.fb.group({
    "afiliacion":this.fb.group({
      "id":this.fb.control(null),
      "motivo":this.fb.control(null, Validators.required),
      "codigo":this.fb.control(null, Validators.required),
      "estado":this.fb.control(null, Validators.required),
      "organo":this.fb.control(null, Validators.required),
      "departamento_judicial":this.fb.control(null, Validators.required),
      "departamento_judicial_informado":this.fb.control({value:null,disabled:true}),
      "observaciones":this.fb.control(null),
      "persona":this.fb.control(null, Validators.required),
    }),

  }); 

  configForm: FormStructureConfig = new FormStructureConfig({
    controls: {"afiliacion": new FormGroupConfig({
      controls: {
        "id": new FormControlConfig({
          type: new FieldHiddenOptions(),
        }),
  
        "motivo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:["Alta", "Baja", "Pendiente"]}),
          default: "Alta",
          label: "Motivo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "codigo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:[161, 162]}),
          label: "Código",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})        
        }),
        "estado": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
          default: "Creado",
          label: "Estado",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "organo": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "organo",
          }),
          label: "Órgano",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "departamento_judicial": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "organo",
          }),
          label: "Órgano",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "departamento_judicial_informado": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "departamento_judicial",
          }),
          label: "Departamento Judicial Informado",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "observaciones": new FormControlConfig({
          type: new FieldTextareaOptions(),
          label: "Observaciones",
          width:new FieldWidthOptions({gtSm:"100%", sm:"100%"})
        }),
        "persona": new FormControlConfig({
          type: new FieldHiddenOptions(),
        }),
      }
    })}
  })

  configComponent: { [x: string]: ComponentOptions } = {
    "afiliacion": new FieldsetDynamicOptions({
        entityName:"afiliacion",
        title:"Registro 40 ",
        optTitle:[
          new FormControlOption({
            config: new FormControlConfig({
              type: new TypeLabelOptions({entityName:"persona"}),
            }),
            field: (this.adminForm.controls["afiliacion"] as FormGroup).controls["persona"],
          }),
        ]
      })
  }

 
  reload(response){
    this.back();
  }
}

