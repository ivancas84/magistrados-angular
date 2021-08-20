import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldDateOptions, FieldHiddenOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldTextareaOptions, TypeLabelOptions } from '@class/field-type-options';
import { FieldWrapCardOptions } from '@class/field-wrap-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { AbstractControlOption, FormControlConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { FieldsetViewOptions, AbstractControlViewOptions, EventButtonViewOptions, EventIconViewOptions } from '@class/abstract-control-view-options';

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class AfiliacionAdminComponent extends AdminComponent implements OnInit{
  
  readonly entityName: string = "afiliacion"
  inputSearchGo: boolean = false;

  form: FormGroup = this.fb.group({
    "afiliacion":this.fb.group({
      "id":this.fb.control(null),
      "motivo":this.fb.control("Alta", Validators.required),
      "estado":this.fb.control("Creado", Validators.required),
      "codigo":this.fb.control(null, Validators.required),
      "observaciones":this.fb.control(null),
      "organo":this.fb.control(null, Validators.required),
      "departamento_judicial":this.fb.control(null, Validators.required),
      "departamento_judicial_informado":this.fb.control({value:null,disabled:true}),
      "persona":this.fb.control(null, Validators.required),
      "creado":this.fb.control({value:null,disabled:true}),
      "enviado":this.fb.control({value:null,disabled:true}),
      "evaluado":this.fb.control({value:null,disabled:true}),
      "modificado":this.fb.control({value:null,disabled:true}),

    }),
  }); 

  config: FormStructureConfig = new FormStructureConfig({
    controls: {"afiliacion": new FormGroupConfig({
   
      controls: {
        "id": new FormControlConfig({
          type: new FieldHiddenOptions(),
        }),
  
        "motivo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:["Alta", "Baja", "Pendiente"]}),
          label: "Motivo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "estado": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
          label: "Estado",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "codigo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:[161, 162]}),
          label: "Código",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})        
        }),
        "organo": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "organo",
          }),
          label: "Órgano",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "departamento_judicial": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "departamento_judicial",
          }),
          label: "Departamento Judicial",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
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
        "creado": new FormControlConfig({
          wrap: new FieldWrapCardOptions({ backgroundColor:"#17a2b8" }),
          type: new FieldDateOptions(),
          label:"Creado"
        }),
        "enviado": new FormControlConfig({
          wrap: new FieldWrapCardOptions({ backgroundColor:"#007bff" }),
          type: new FieldDateOptions(),
          label:"Enviado"
        }),
        "evaluado": new FormControlConfig({
          wrap: new FieldWrapCardOptions(),
          type: new FieldDateOptions(),
          label:"Evaluado"
        }),
        "modificado": new FormControlConfig({
          wrap: new FieldWrapCardOptions({ backgroundColor:"#6c757d" }),
          type: new FieldDateOptions(),
          label:"Modificado"
        }),
      }
    })}
  })

  nestedComponents: { [x: string]: AbstractControlViewOptions } = {
    "afiliacion": new FieldsetViewOptions({
        entityName:"afiliacion",
        title:"Registro 40 ",
        optTitle:[
          new AbstractControlOption({
            config: new FormControlConfig({
              type: new TypeLabelOptions({entityName:"persona"}),
            }),
            control: (this.form.controls["afiliacion"] as FormGroup).controls["persona"],
          }),
        ]
      })
  }

  optFooter: AbstractControlOption[] = [ //eliminar clear
    new AbstractControlOption({
      viewOptions: new EventButtonViewOptions({
        text: "Aceptar", 
        action: "submit",
        color: "primary",
        fieldEvent: this.optField
      }),
      config: new FormGroupConfig({}),
    }),

    new AbstractControlOption({
      viewOptions: new EventIconViewOptions({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      }),
      config: new FormGroupConfig({}),
    }),
  ]

  ngOnInit() {
    super.ngOnInit();  
    this.form.valueChanges.subscribe(
      values => {
        if(values["afiliacion"]["estado"] == "Aprobado"){
          ((this.config.controls["afiliacion"].controls["evaluado"] as FormControlConfig).wrap as FieldWrapCardOptions).backgroundColor = "#aaff80" 
        } else {
          ((this.config.controls["afiliacion"].controls["evaluado"] as FormControlConfig).wrap as FieldWrapCardOptions).backgroundColor = "#ff8080" 
        }

        /*console.log(this.form.get("afiliacion.modificado").value);
        if(this.form.get("afiliacion.modificado").value
          || this.form.get("afiliacion.enviado").value
          || this.form.get("afiliacion.evaluado").value){
            this.form.get("afiliacion.motivo").disable();

          }*/
             
      }
    )
  }

  reload(){
    this.back();
  }
}

