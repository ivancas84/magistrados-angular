import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldHiddenOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldTextareaOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { FieldsetDynamicOptions } from '@class/fieldset-dynamic-options';
import { FormGroupExt, FormControlExt } from '@class/reactive-form-ext';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class AfiliacionAdminComponent extends AdminComponent implements OnInit{
  
  readonly entityName: string = "afiliacion"

  adminForm: FormGroupExt = new FormGroupExt({
    "afiliacion":new FormGroupExt({
      "id":new FormControlExt(),
      "motivo":new FormControlExt(null, Validators.required),
      "codigo":new FormControlExt(null, Validators.required),
      "estado":new FormControlExt(null, Validators.required),
      "organo":new FormControlExt(null, Validators.required),
      "departamento_judicial":new FormControlExt(null, Validators.required),
      "departamento_judicial_informado":new FormControlExt({value:null,disabled:true}),
      "observaciones":new FormControlExt(null),
      "persona":new FormControlExt(null, Validators.required),

    }),

  }); 

  /*configForm(){
    var p = (this.adminForm.controls["afiliacion"] as FormGroupExt);

    p.set({
      position:1,
      options: new FieldsetDynamicOptions({
        entityName:"afiliacion",
        title:"Registro 40 " + this.labels,
        inputSearchGo: false
      })
    });

    (p.controls["id"] as FormControlExt).set({
      type: new FieldHiddenOptions(),
    });

    (p.controls["motivo"] as FormControlExt).set({
      position:1,
      type: new FieldInputSelectParamOptions({options:["Alta", "Baja", "Pendiente"]}),
      default: "Alta",
      label: "Motivo",
      validatorMsgs: [ new RequiredValidatorMsg, ],
      width:new FieldWidthOptions({gtSm:"33%"})
    });

    (p.controls["codigo"] as FormControlExt).set({
      position:2,
      type: new FieldInputSelectParamOptions({options:[161, 162]}),
      label: "Código",
      validatorMsgs: [ new RequiredValidatorMsg, ],
      width:new FieldWidthOptions({gtSm:"33%"})

    });

    (p.controls["estado"] as FormControlExt).set({
      position:3,
      type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
      default: "Creado",
      label: "Estado",
      validatorMsgs: [ new RequiredValidatorMsg, ],
      width:new FieldWidthOptions({gtSm:"34%"})
    });

    (p.controls["organo"] as FormControlExt).set({
      position:4,
      type: new FieldInputSelectOptions({
        entityName: "organo",
      }),
      label: "Órgano",
      width:new FieldWidthOptions({gtSm:"33%"})
    });

    (p.controls["departamento_judicial"] as FormControlExt).set({
      position:4,
      type: new FieldInputSelectOptions({
        entityName: "departamento_judicial",
      }),
      label: "Departamento Judicial",
      width:new FieldWidthOptions({gtSm:"33%"})
    });

    (p.controls["departamento_judicial_informado"] as FormControlExt).set({
      position:5,
      type: new FieldInputSelectOptions({
        entityName: "departamento_judicial",
      }),
      label: "Departamento Judicial Informado",
      width:new FieldWidthOptions({gtSm:"33%"})
    });

    (p.controls["observaciones"] as FormControlExt).set({
      position:6,
      type: new FieldTextareaOptions(),
      label: "Observaciones",
      width:new FieldWidthOptions({gtSm:"100%", sm:"100%"})
    });


    (p.controls["persona"] as FormControlExt).set({
      type: new FieldHiddenOptions(),
    });
  }

  reload(response){
    this.back();
  }*/
}

