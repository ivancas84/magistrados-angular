import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormGroupConfig, FormControlConfig } from "@class/reactive-form-config";
import { MaxValidatorMsg, MinValidatorMsg, PatternValidatorMsg, RequiredValidatorMsg } from "@class/validator-msg";
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
import { ControlLabelConfig } from "@component/control-label/control-label.component";
import { InputTextConfig } from "@component/input-text/input-text.component";
import { InputDateConfig } from "@component/input-date/input-date.component";

@Component({
    selector: 'app-afiliacion-admin',
    templateUrl: '../../core/component/structure/detail.component.html',
})
export class TramiteExcepcionalAdminComponent extends DetailComponent implements OnInit{

    override entityName: string = "tramite_excepcional"  
    override inputSearchGo: boolean = false;
    override control: FormGroup =  new FormGroup({})
    override title: string = "Registro 80"

    override config: FormGroupConfig = new FormGroupConfig({
        persona: new FormControlConfig,
        motivo: new InputSelectParamConfig({
          options:["Alta", "Baja", "Pendiente"],
          default: "Alta",
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        estado: new InputSelectParamConfig({
          options:['Creado','Enviado','Aprobado','Rechazado'],
          default: "Creado",
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        monto: new InputTextConfig({
          validatorMsgs: [ new RequiredValidatorMsg, new MaxValidatorMsg, new MinValidatorMsg, new PatternValidatorMsg ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        desde: new InputDateConfig({
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        hasta: new InputDateConfig({
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        sucursal: new InputSelectConfig({
          label: "Sucursal",
          width:new FieldWidthOptions({gtSm:"33%"}),
          default:1
        }),
        codigo: new InputSelectParamConfig({
          options:[163, 1631, 1632],
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()    
        }),
        organo: new InputSelectConfig({
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
        departamento_judicial: new InputSelectConfig({
          required: true,
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
        departamento_judicial_informado: new InputSelectConfig({
          disabled: true,
          entityName: "departamento_judicial",
          width:new FieldWidthOptions()
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


    override optTitle: AbstractControlViewOption[] = [ //opciones de componente
      {
        config: new ControlLabelConfig({
          entityName:"persona",
        }),
      }
    ];

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
      this.optTitle[0].control = this.control.controls["persona"]

      this.control.valueChanges.subscribe(
        values => {
          if(values["estado"] == "Aprobado"){
            (this.config.controls["evaluado"] as FieldWrapCardConfig).backgroundColor = "#aaff80" 
          } else {
            (this.config.controls["evaluado"] as FieldWrapCardConfig).backgroundColor = "#ff8080" 
          }
        }
      )
    }
  
}

