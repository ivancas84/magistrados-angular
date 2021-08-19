import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldDateOptions, FieldHiddenOptions, FieldInputDateOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldInputTextOptions, FieldTextareaOptions, TypeLabelOptions } from '@class/field-type-options';
import { FieldWrapCardOptions } from '@class/field-wrap-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { AbstractControlOption, FormControlConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { AbstractControlViewOptions, EventButtonViewOptions, FieldsetViewOptions } from '@class/abstract-control-view-options';

@Component({
  selector: 'app-tramite-excepcional-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class TramiteExcepcionalAdminComponent extends AdminComponent implements OnInit{
  
  readonly entityName: string = "tramite_excepcional"
  inputSearchGo: boolean = false;

  form: FormGroup = this.fb.group({
    "tramite_excepcional":this.fb.group({
      "id":this.fb.control(null),
      "motivo":this.fb.control("Alta", Validators.required),
      "estado":this.fb.control("Creado", Validators.required),
      "codigo":this.fb.control(null, Validators.required),
      "observaciones":this.fb.control(null),
      "desde":this.fb.control(null),
      "hasta":this.fb.control(null),
      "sucursal":this.fb.control(null),
      "monto":this.fb.control(null, {validators: [Validators.pattern('^-?[0-9]+(\\.[0-9]{1,2})?$'),Validators.max(99999999999999999.99),Validators.min(-99999999999999999.99)]}),
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
    controls: {"tramite_excepcional": new FormGroupConfig({
      controls: {
        "id": new FormControlConfig({
          type: new FieldHiddenOptions(),
        }),
  
        "motivo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:["Alta", "Baja", "Pendiente"]}),
          label: "Motivo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"}),
          default:"Alta"
        }),
        "estado": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
          label: "Estado",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"}),
          default:"Creado"
        }),
        "monto": new FormControlConfig({
          type: new FieldInputTextOptions(),
          label: "Monto",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "desde": new FormControlConfig({
          type: new FieldInputDateOptions(),
          label: "Desde",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "hasta": new FormControlConfig({
          type: new FieldInputDateOptions(),
          label: "Hasta",
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "sucursal": new FormControlConfig({
          type: new FieldInputSelectOptions({entityName:"sucursal"}),
          label: "Sucursal",
          width:new FieldWidthOptions({gtSm:"33%"}),
          default:1
        }),

        "codigo": new FormControlConfig({
          type: new FieldInputSelectParamOptions({options:[161, 162]}),
          label: "Código",
          validatorMsgs: [ new RequiredValidatorMsg, ],
        }),
        "organo": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "organo",
          }),
          label: "Órgano",
          validatorMsgs: [ new RequiredValidatorMsg, ],
        }),
        "departamento_judicial": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "departamento_judicial",
          }),
          label: "Departamento Judicial",
          validatorMsgs: [ new RequiredValidatorMsg, ],
        }),
        "departamento_judicial_informado": new FormControlConfig({
          type: new FieldInputSelectOptions({
            entityName: "departamento_judicial",
          }),
          label: "Departamento Judicial Informado",
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
    "tramite_excepcional": new FieldsetViewOptions({
        entityName:"tramite_excepcional",
        title:"Registro 80 ",
        optTitle:[
          new AbstractControlOption({
            config: new FormControlConfig({
              type: new TypeLabelOptions({entityName:"persona"}),
            }),
            control: (this.form.controls["tramite_excepcional"] as FormGroup).controls["persona"],
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
      }) ,
      config: new FormGroupConfig({}),
    }),
  ]

  ngOnInit() {
    super.ngOnInit();  
    this.form.valueChanges.subscribe(
      values => {
        if(values["tramite_excepcional"]["estado"] == "Aprobado"){
          ((this.config.controls["tramite_excepcional"].controls["evaluado"] as FormControlConfig).wrap as FieldWrapCardOptions).backgroundColor = "#aaff80" 
        } else {
          ((this.config.controls["tramite_excepcional"].controls["evaluado"] as FormControlConfig).wrap as FieldWrapCardOptions).backgroundColor = "#ff8080" 
        }

        /*console.log(this.form.get("tramite_excepcional.modificado").value);
        if(this.form.get("tramite_excepcional.modificado").value
          || this.form.get("tramite_excepcional.enviado").value
          || this.form.get("tramite_excepcional.evaluado").value){
            this.form.get("tramite_excepcional.motivo").disable();

          }*/
             
      }
    )
  }

  reload(){
    this.back();
  }
}

