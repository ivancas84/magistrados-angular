import { Component, OnInit } from '@angular/core';
import { FormGroup, PatternValidator, Validators } from '@angular/forms';
import { FieldDateOptions, FieldHiddenOptions, FieldInputDateOptions, FieldInputSelectOptions, FieldInputTextOptions, TypeLabelOptions } from '@class/field-type-options';
import { RouterLinkOptions } from '@class/field-wrap-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { AbstractControlOption, FormArrayConfig, FormControlConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg, UniqueValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { AfiliacionFormGroupFactory } from './afiliacion-form-group-factory.class';
import { TramiteExcepcionalFormGroupFactory } from './tramite-excepcional-form-group-factory.class';
import { FieldsetViewOptions, AbstractControlViewOptions, TableViewOptions, RouteIconFieldViewOptions } from '@class/abstract-control-view-options';

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
      "persona": new FormGroupConfig({
        position:1,
        controls: {
          "id": new FormControlConfig({
            type: new FieldHiddenOptions(),
          }),
          "nombres": new FormControlConfig({
            type: new FieldInputTextOptions(),
            label: "Nombres",
            position:1,
          }),
          "apellidos": new FormControlConfig({
            type: new FieldInputTextOptions(),
            label: "Apellidos",
            position:2   
          }),
          "legajo": new FormControlConfig({
            type: new FieldInputTextOptions(),
            label: "Legajo",
            position:3,  
            validatorMsgs: [
              new RequiredValidatorMsg,
              new UniqueValidatorMsg
            ]
          }),
          "tipo_documento": new FormControlConfig({
            label: "Tipo Documento",
            position:4,
            type: new FieldInputSelectOptions({entityName:"tipo_documento"}),
            width:new FieldWidthOptions({gtSm:"10%", sm:"15%"})
          }),
          "numero_documento": new FormControlConfig({
            label: "DNI",
            position:5,
            type: new FieldInputTextOptions(),
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
          "telefono_laboral": new FormControlConfig({
            label: "Telefono Laboral",
            position:6,
            type: new FieldInputTextOptions(),
          }),
          "telefono_particular": new FormControlConfig({
            label: "Telefono Particular",
            position:6,
            type: new FieldInputTextOptions(),
          }),
          "fecha_nacimiento": new FormControlConfig({
            position:7,
            type: new FieldInputDateOptions,
            label: "Fecha Nacimiento",
          }),
          "email": new FormControlConfig({
            position:8,
            type: new FieldInputTextOptions(),
            label: "Email",
            validatorMsgs: [
              new PatternValidator,
            ],
          }),
          "tribunal": new FormControlConfig({
            position:9,
            type: new FieldInputTextOptions(),
            label: "Tribunal",
            width:new FieldWidthOptions({
              gtSm: "50%",
              //sm: "15%"
            })  
          }),
          "cargo": new FormControlConfig({
            position:10,
            type: new FieldInputSelectOptions({
              entityName: "cargo",
            }),
            label: "Cargo",
            width:new FieldWidthOptions({
              gtSm: "50%",
              //sm: "15%"
            })  
          }),
        }
      }),

      "afiliacion/persona": new FormArrayConfig({
        order:  {"creado":"desc"},
        factory:new AfiliacionFormGroupFactory,  
        position:2,
        controls:{
          "id": new FormControlConfig({
            type: new FieldHiddenOptions
          }),
          "motivo": new FormControlConfig({
            label: "Motivo",
            wrap: new RouterLinkOptions({path:"afiliacion-admin"})
          }),
          "estado": new FormControlConfig({
            label: "Estado",
          }),
          "codigo": new FormControlConfig({
            label: "Cód"
          }),
          "departamento_judicial": new FormControlConfig({
            label: "Departamento",
            type:new TypeLabelOptions({entityName:"departamento_judicial"})
          }),
          "organo": new FormControlConfig({
            label: "Organo",
            type:new TypeLabelOptions({entityName:"organo"})
          }),
          "creado": new FormControlConfig({
            label: "Creado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "enviado": new FormControlConfig({
            label: "Enviado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "evaluado": new FormControlConfig({
            label: "Evaluado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "modificado": new FormControlConfig({
            label: "Modificado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "observaciones": new FormControlConfig({
            label: "Observaciones",
  
          }),
        }
      }),

      "tramite_excepcional/persona": new FormArrayConfig({
        order:  {"creado":"desc"},
        factory:new TramiteExcepcionalFormGroupFactory,  
        position:3,
        controls:{
          "id": new FormControlConfig({
            type: new FieldHiddenOptions
          }),
          "motivo": new FormControlConfig({
            label: "Motivo",
            wrap: new RouterLinkOptions({path:"tramite-excepcional-admin"})
          }),
          "estado": new FormControlConfig({
            label: "Estado",
          }),
          "codigo": new FormControlConfig({
            label: "Cód"
          }),
          "departamento_judicial": new FormControlConfig({
            label: "Departamento",
            type:new TypeLabelOptions({entityName:"departamento_judicial"})
          }),
          "organo": new FormControlConfig({
            label: "Organo",
            type:new TypeLabelOptions({entityName:"organo"})
          }),
          
          "creado": new FormControlConfig({
            label: "Creado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "enviado": new FormControlConfig({
            label: "Enviado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "evaluado": new FormControlConfig({
            label: "Evaluado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "modificado": new FormControlConfig({
            label: "Modificado",
            type:new FieldDateOptions({
              format: "dd/MM/yyyy HH:mm"
            })
          }),
          "observaciones": new FormControlConfig({
            label: "Observaciones",
          }),
          "desde": new FormControlConfig({
            label: "Desde",
            type:new FieldDateOptions()
          }),
          "hasta": new FormControlConfig({
            label: "Hasta",
            type:new FieldDateOptions()
          }),
          "monto": new FormControlConfig({
            label: "Monto",
          }),
        }
      }),
    }
  });


  nestedComponents: { [x: string]: AbstractControlViewOptions } = {
    "persona": new FieldsetViewOptions({
      pos:0,
      entityName:"persona",
      title:"Persona",
      config:this.config.controls["persona"],
      fieldset:this.form.controls["persona"]
    }),
    "afiliacion/persona": new TableViewOptions({
      pos:1,
      title: "Registro 40",
      sortDisabled:["departamento_judicial","organo"],
      optTitle: [
        new AbstractControlOption({
          config: new FormControlConfig({ 
            type: new RouteIconFieldViewOptions({
              icon: "add",
              key:  "persona",
              routerLink: "afiliacion-admin",
              title: "Agregar Afiliacion",
              color:"accent"
            }) 
          }),
          control: (this.form.controls["persona"] as FormGroup).controls["id"]
        }),
      ],
      config:this.config.controls["afiliacion/persona"],
      fieldset:this.form.controls["afiliacion/persona"]
    }),
    "tramite_excepcional/persona": new TableViewOptions({
      pos:2,
      title: "Registro 80",
      sortDisabled:["departamento_judicial","organo"],
      config:this.config.controls["tramite_excepcional/persona"],
      fieldset:this.form.controls["tramite_excepcional/persona"]
      // optTitle: [
      //   new AbstractControlOption({
      //     config: new FormControlConfig({
      //       type: new RouteIconFieldViewOptions({
      //         icon: "add",
      //         key:  "persona",
      //         routerLink: "tramite-excepcional-admin",
      //         title: "Agregar Afiliacion",
      //         color:"accent"
      //       }),
      //     }),
      //     field: (this.form.controls["persona"] as FormGroup).controls["id"]
      //   }),
      // ]
    }),
  }
}

