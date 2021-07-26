import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldHiddenOptions, FieldInputTextOptions, FieldTextareaOptions } from '@class/field-type-options';
import { FormGroupFactory, FormGroupExt, FormControlExt, FormArrayExt } from '@class/reactive-form-ext';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminDynamicComponent } from '@component/admin/admin-dynamic.component';

class AfiliacionFormGroupFactory implements FormGroupFactory{

  formGroup(): FormGroupExt {
    var fg = new FormGroupExt({
      "id":new FormControlExt(),
      "motivo":new FormControlExt(),
      "estado":new FormControlExt(),
      "_delete":new FormControlExt(),
    });

    (fg.controls["id"] as FormControlExt).set({
      type: new FieldHiddenOptions
    });

    (fg.controls["motivo"] as FormControlExt).set({
      type: new FieldInputTextOptions,
      label: "Motivo",
      default: "Alta"
    });

    (fg.controls["estado"] as FormControlExt).set({
      type: new FieldInputTextOptions,
      label: "Estado"
    });

    (fg.controls["_delete"] as FormControlExt).set({
      type: new FieldHiddenOptions,
    })
    return fg;
  }
}

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin-dynamic.component.html',
})
export class PersonaAdmin2Component extends AdminDynamicComponent implements OnInit{
  

  readonly entityName: string = "persona"

  adminForm: FormGroupExt = new FormGroupExt({
    "persona":new FormGroupExt({
      "id":new FormControlExt(),
      "nombres":new FormControlExt(),
      "apellidos":new FormControlExt(),
      "legajo":new FormControlExt(null, Validators.required),
      "numero_documento":new FormControlExt(null, Validators.required),
      "telefono_laboral":new FormControlExt(),
      "telefono_particular":new FormControlExt(),
      "fecha_nacimiento":new FormControlExt(),
      "email":new FormControlExt(),
      "tribunal":new FormControlExt(),
      "cargo":new FormControlExt(),
      "tipo_documento":new FormControlExt(),
    }),
    "afiliacion/persona": new FormArrayExt([])
  }); 

  configForm() {
    var p = (this.adminForm.controls["persona"] as FormGroupExt);
    p.set({
      title:"Persona",
      position:2,
    });

    (p.controls["id"] as FormControlExt).set({
      type: new FieldHiddenOptions(),
      label: "Id"
    });

    (p.controls["nombres"] as FormControlExt).set({
      type: new FieldInputTextOptions(),
      label: "Nombres",
      default:"Prueba"
    });

    (p.controls["apellidos"] as FormControlExt).set({
      type: new FieldInputTextOptions(),
      label: "Apellidos"
    });

    (p.controls["legajo"] as FormControlExt).set({
      type: new FieldInputTextOptions(),
      label: "Legajo",
      validatorMsgs: [new RequiredValidatorMsg]
    });

    (p.controls["numero_documento"] as FormControlExt).set({
      type: new FieldInputTextOptions(),
      label: "DNI",
      validatorMsgs: [new RequiredValidatorMsg]
    });

    var c = this.adminForm.controls["afiliacion/persona"] as FormArrayExt;
    c.set({
       title:"Registro 40",
       factory:new AfiliacionFormGroupFactory,  
       position:3,
       default: [{motivo:"Baja"},{estado:"Hola"}]
    });
    
   
  } 

  /*
  initForm(){
    this.adminForm.controlKey("persona","numero_documento").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","numero_documento").setValidators([Validators.required]);

    this.adminForm.controlKey("persona","telefono_laboral").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","telefono_particular").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","numero_documento").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","fecha_nacimiento").type =  new FieldInputDateOptions;
    this.adminForm.controlKey("persona","email").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","tribunal").type =  new FieldInputTextOptions;
    this.adminForm.controlKey("persona","cargo").type = new FieldInputSelectOptions({entityName:'cargo'});
    this.adminForm.controlKey("persona","tipo_documento").type =  new FieldInputSelectOptions({entityName:'tipo_documento'});

  }*/
}

