import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormGroupConfig, FormControlConfig } from "@class/reactive-form-config";
import { RequiredValidatorMsg } from "@class/validator-msg";
import { InputSelectConfig } from "@component/input-select/input-select.component";
import { FieldWidthOptions } from "@class/field-width-options";
import { ControlDateConfig } from "@component/control-date/control-date.component";
import { DetailComponent } from "@component/structure/detail.component";
import { InputSelectParamConfig } from "@component/input-select-param/input-select-param.component";
import { TextareaConfig } from "@component/textarea/textarea.component";
import { FieldWrapCardConfig } from "@component/field-wrap-card/field-wrap-card.component";
import { AbstractControlViewOption } from "@component/abstract-control-view/abstract-control-view.component";
import { EventButtonConfig } from "@component/event-button/event-button.component";
import { EventIconConfig } from "@component/event-icon/event-icon.component";

@Component({
    selector: 'app-afiliacion-admin',
    templateUrl: '../../core/component/structure/detail.component.html',
})
export class AfiliacionAdminComponent extends DetailComponent implements OnInit{

    override entityName: string = "afiliacion"  

    override control: FormGroup =  new FormGroup({})

    override config: FormGroupConfig = new FormGroupConfig({
        persona: new FormControlConfig,
        motivo: new InputSelectParamConfig({
          options:["Alta", "Baja", "Pendiente"],
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        estado: new InputSelectParamConfig({
          options:['Creado','Enviado','Aprobado','Rechazado'],
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        codigo: new InputSelectParamConfig({
          options:[161, 162, 1621, 1622],
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})        
        }),
        organo: new InputSelectConfig({
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        departamento_judicial: new InputSelectConfig({
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        departamento_judicial_informado: new InputSelectConfig({
          disabled: true,
          entityName: "departamento_judicial",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        observaciones: new TextareaConfig({
          width:new FieldWidthOptions({gtSm:"100%", sm:"100%"})
        }),
        creado: new FieldWrapCardConfig({        
          disabled:true,
          backgroundColor:"#17a2b8",        
          config: new ControlDateConfig,
          width:new FieldWidthOptions
        }),
        enviado: new FieldWrapCardConfig({
          disabled:true,
          backgroundColor:"#007bff",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()
        }),
        evaluado: new FieldWrapCardConfig({
          disabled:true,
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()
        }),
        modificado: new FieldWrapCardConfig({
          disabled:true,
          backgroundColor:"#6c757d",
          config: new ControlDateConfig(),
          width:new FieldWidthOptions()
        }),
    })


    override optFooter: AbstractControlViewOption[] = [ //opciones de componente
    {
      config:new EventButtonConfig({
        text: "Aceptar", //texto del boton
        action: "submit", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.optField
      }),
    },
    {
      config:new EventIconConfig({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      }),
    },
    {
      config:new EventIconConfig({
        icon: "cached", //texto del boton
        action: "reset", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.optField
      }),
    },

  ];


    override reload(){
      this.back();
    }

    override ngOnInit() {
      super.ngOnInit();  
      this.control.valueChanges.subscribe(
        values => {
          if(values["estado"] == "Aprobado"){
            (this.config.controls["evaluado"] as FieldWrapCardConfig).backgroundColor = "#aaff80" 
          } else {
            (this.config.controls["evaluado"] as FieldWrapCardConfig).backgroundColor = "#ff8080" 
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
  
}

