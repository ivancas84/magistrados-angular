import { Component, OnInit } from '@angular/core';
import { FormGroup, PatternValidator, Validators } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg, UniqueValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { AfiliacionFormGroupFactory } from './afiliacion-form-group-factory.class';
import { TramiteExcepcionalFormGroupFactory } from './tramite-excepcional-form-group-factory.class';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputDateConfig } from '@component/input-date/input-date.component';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { RouteIconConfig } from '@component/route-icon/route-icon.component';



@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class PersonaAdminComponent extends AdminComponent implements OnInit{

  readonly entityName: string = "persona"
  
  ngOnInit(){
    this.form.controls["afiliacion/persona"].disable();
    this.form.controls["tramite_excepcional/persona"].disable();
    super.ngOnInit();
  }

  form: FormGroup = this.fb.group({
    "persona":this.fb.group({
      "id":[null],
      "nombres":[null],
      "apellidos":[null],
      "legajo":[null,  {
        validators: [Validators.required], 
        asyncValidators:[this.validators.unique('legajo', 'persona')]
      }],
      "tipo_documento":[null],
      "numero_documento":[null,  {
        validators: [Validators.required], 
        asyncValidators:[this.validators.unique('numero_documento', 'persona')]
      }],
      "telefono_laboral":[null],
      "telefono_particular":[null],
      "fecha_nacimiento":[null],
      "email":[null],
      "tribunal":[null],
      "cargo":[null],
    }),
    "afiliacion/persona": this.fb.array([]),
    "tramite_excepcional/persona": this.fb.array([]),
  });

  config: FormStructureConfig = new FormStructureConfig({
    controls: {
      "persona": new FieldsetDynamicConfig({
        title: "Persona",
        position: 1,
        controls: {
          "nombres": new InputTextConfig({
            label: "Nombres",
            position:1,
            width:new FieldWidthOptions()
          }),
          "apellidos": new InputTextConfig({
            label: "Apellidos",
            position:2,
            width:new FieldWidthOptions()
          }),
          "legajo": new InputTextConfig({
            label: "Legajo",
            position:3,  
            validatorMsgs: [
              new RequiredValidatorMsg,
              new UniqueValidatorMsg
            ],
            width:new FieldWidthOptions()
          }),
          "tipo_documento": new InputSelectConfig({
            label: "Tipo Documento",
            position:4,
            entityName:"tipo_documento",
            width:new FieldWidthOptions({gtSm:"10%", sm:"15%"})
          }),
          "numero_documento": new InputTextConfig({
            label: "DNI",
            position:5,
            width:new FieldWidthOptions({
              gtSm: "15%",
              sm: "35%",
            }),
            validatorMsgs: [
              new RequiredValidatorMsg,
              new UniqueValidatorMsg({
                route:"persona-admin"
              })
            ],
          }),
          "telefono_laboral": new InputTextConfig({
            label: "Telefono Laboral",
            position:6,
            width:new FieldWidthOptions()

          }),
          "telefono_particular": new InputTextConfig({
            label: "Telefono Particular",
            position:6,
            width:new FieldWidthOptions()
          }),
          "fecha_nacimiento": new InputDateConfig({
            position:7,
            label: "Fecha Nacimiento",
            width:new FieldWidthOptions()
          }),
          "email": new InputTextConfig({
            position:8,
            label: "Email",
            validatorMsgs: [
              new PatternValidator,
            ],
            width:new FieldWidthOptions()
          }),
          "tribunal": new InputTextConfig({
            position:9,
            label: "Tribunal",
            width:new FieldWidthOptions({
              gtSm: "50%",
              //sm: "15%"
            })  
          }),
          "cargo": new InputSelectConfig({
            position:10,
            entityName: "cargo",
            label: "Cargo",
            width:new FieldWidthOptions({
              gtSm: "50%",
              //sm: "15%"
            })  
          }),
        }
      }),

      "afiliacion/persona": new TableDynamicConfig({
        order:  {"creado":"desc"},
        factory:new AfiliacionFormGroupFactory,  
        position:2,
        title: "Registro 40",
        sortDisabled:["departamento_judicial","organo"],
        optTitle: [
          new RouteIconConfig({
            icon: "add",
            key:  "persona",
            routerLink: "afiliacion-admin",
            title: "Agregar Afiliacion",
            color:"accent",
            control: (this.form.controls["persona"] as FormGroup).controls["id"]
          })
        ],
        controls: {
          "motivo": new FieldWrapRouterLinkConfig({
            label:"Motivo",
            path:"afiliacion-admin",
            config: new ControlValueConfig({
               label:"Motivo"
            })
          }),
          "estado": new ControlValueConfig({
            label: "Estado",
          }),
          "codigo": new ControlValueConfig({
            label: "Cód",
          }),
          "departamento_judicial": new ControlLabelConfig({
            label: "Departamento",
            entityName:"departamento_judicial"
          }),
          "organo": new ControlLabelConfig({
            label: "Organo",
            entityName:"organo"
          }),
          "creado": new ControlDateConfig({
            label: "Creado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "enviado": new ControlDateConfig({
            label: "Enviado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "evaluado": new ControlDateConfig({
            label: "Evaluado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "modificado": new ControlDateConfig({
            label: "Modificado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "observaciones": new ControlValueConfig({
             label: "Observaciones",
          })
        }
       
      }),

      "tramite_excepcional/persona": new TableDynamicConfig({
        order:  {"creado":"desc"},
        factory:new TramiteExcepcionalFormGroupFactory,  
        position:2,
        title: "Registro 80",
        sortDisabled:["departamento_judicial","organo"],
        controls:{
          "motivo": new FieldWrapRouterLinkConfig({
            label:"Motivo",
            path:"afiliacion-admin",
            config: new ControlValueConfig({
               label:"Motivo"
            })
          }),
          "estado": new ControlValueConfig({
            label: "Estado",
          }),
          "codigo": new ControlValueConfig({
            label: "Cód",
          }),
          "departamento_judicial": new ControlLabelConfig({
            label: "Departamento",
            entityName:"departamento_judicial"
          }),
          "organo": new ControlLabelConfig({
            label: "Organo",
            entityName:"organo"
          }),
          "creado": new ControlDateConfig({
            label: "Creado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "enviado": new ControlDateConfig({
            label: "Enviado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "evaluado": new ControlDateConfig({
            label: "Evaluado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "modificado": new ControlDateConfig({
            label: "Modificado",
            format: "dd/MM/yyyy HH:mm"
          }),
          "observaciones": new ControlValueConfig({
             label: "Observaciones",
          }),
          "desde": new ControlDateConfig({
            label: "Desde",
          }),
          "hasta": new ControlDateConfig({
            label: "Hasta",
          }),
          "monto": new ControlDateConfig({
            label: "Monto",
          }),
        },
        optTitle: [
          new RouteIconConfig({
            icon: "add",
            key:  "persona",
            routerLink: "tramite-excepcional-admin",
            title: "Agregar Registro 80",
            color:"accent",
            control: (this.form.controls["persona"] as FormGroup).controls["id"]
          }),
          
        ],
   
      }),
    }
  });


}

