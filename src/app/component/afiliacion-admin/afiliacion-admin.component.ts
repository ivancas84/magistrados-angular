import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { TextareaConfig } from '@component/textarea/textarea.component';
import { FieldWrapCardConfig } from '@component/field-wrap-card/field-wrap-card.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';

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
    controls: {"afiliacion": new FieldsetDynamicConfig({
      entityName:"afiliacion",
      title:"Registro 40 ",
      optTitle: [
        {
          config: new ControlLabelConfig({
            entityName:"persona",
          }),
          control: (this.form.controls["afiliacion"] as FormGroup).controls["persona"],
        }
      ],
      controls: {
        "motivo": new InputSelectParamConfig({
          options:["Alta", "Baja", "Pendiente"],
          label: "Motivo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "estado": new InputSelectParamConfig({
          options:['Creado','Enviado','Aprobado','Rechazado'],
          label: "Estado",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "codigo": new InputSelectParamConfig({
          options:[161, 162, 1621, 1622],
          label: "Código",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})        
        }),
        "organo": new InputSelectConfig({
          entityName: "organo",
          label: "Órgano",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "departamento_judicial": new InputSelectConfig({
          entityName: "departamento_judicial",
          label: "Departamento Judicial",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "departamento_judicial_informado": new InputSelectConfig({
          entityName: "departamento_judicial",
          label: "Departamento Judicial Informado",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "observaciones": new TextareaConfig({
          label: "Observaciones",
          width:new FieldWidthOptions({gtSm:"100%", sm:"100%"})
        }),
        "creado": new FieldWrapCardConfig({
          backgroundColor:"#17a2b8",
          label:"Creado",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()
        }),
        "enviado": new FieldWrapCardConfig({
          backgroundColor:"#007bff",
          label:"Enviado",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()
        }),
        "evaluado": new FieldWrapCardConfig({
          label:"Evaluado",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()

        }),
        "modificado": new FieldWrapCardConfig({
          backgroundColor:"#6c757d",
          label:"Modificado",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()

        }),
      }
    })}
  })
  
  optFooter: AbstractControlViewOption[] = [ //opciones de componente
    {config:new EventButtonConfig({
      text: "Aceptar", //texto del boton
      action: "submit", //accion del evento a realizar
      color: "primary",
      fieldEvent: this.optField
    }),
    },
    {config:new EventIconConfig({
      icon: "arrow_back", //texto del boton
      action: "back", //accion del evento a realizar
      color: "accent",
      fieldEvent: this.optField
    }),}
  ]; 

  ngOnInit() {
    super.ngOnInit();  
    this.form.valueChanges.subscribe(
      values => {
        if(values["afiliacion"]["estado"] == "Aprobado"){
          this.config.controls["afiliacion"].controls["evaluado"].backgroundColor = "#aaff80" 
        } else {
          this.config.controls["afiliacion"].controls["evaluado"].backgroundColor = "#ff8080" 
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

