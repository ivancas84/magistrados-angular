import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldWrapCardOptions } from '@class/field-wrap-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormControlConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { FieldWrapCardConfig } from '@component/field-wrap-card/field-wrap-card.component';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { TextareaConfig } from '@component/textarea/textarea.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputDateConfig } from '@component/input-date/input-date.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { TableDynamicConfig } from '@component/table/table-dynamic.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';


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
    controls: {"tramite_excepcional": new TableDynamicConfig({
      entityName:"tramite_excepcional",
      title:"Registro 80 ",
      optTitle: [
        {
          config: new ControlLabelConfig({
            entityName:"persona",
          }),
          control: (this.form.controls["tramite_excepcional"] as FormGroup).controls["persona"],
        }
      ],
      controls: {
        "motivo": new InputSelectParamConfig({
          options:["Alta", "Baja", "Pendiente"],
          label: "Motivo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"}),
          default:"Alta"
        }),
        "estado": new InputSelectParamConfig({
          options:['Creado','Enviado','Aprobado','Rechazado'],
          label: "Estado",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"}),
          default:"Creado"
        }),
        "monto": new InputTextConfig({
          label: "Monto",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "desde": new InputDateConfig({
          label: "Desde",
          width:new FieldWidthOptions({gtSm:"33%"})
        }),
        "hasta": new InputDateConfig({
          label: "Hasta",
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "sucursal": new InputSelectConfig({
          entityName:"sucursal",
          label: "Sucursal",
          width:new FieldWidthOptions({gtSm:"33%"}),
          default:1
        }),

        "codigo": new InputSelectParamConfig({
          options:[161, 162],
          label: "Código",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
        "organo": new InputSelectConfig({
          entityName: "organo",
          label: "Órgano",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
        "departamento_judicial": new InputSelectConfig({
          entityName: "departamento_judicial",
          label: "Departamento Judicial",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
        "departamento_judicial_informado": new InputSelectConfig({
          entityName: "departamento_judicial",
          label: "Departamento Judicial Informado",
          width:new FieldWidthOptions()
        }),
        "observaciones": new TextareaConfig({
          label: "Observaciones",
          width:new FieldWidthOptions({gtSm:"100%", sm:"100%"})
        }),
        "persona": new FormControlConfig(),
        "creado": new FieldWrapCardConfig({
          backgroundColor:"#17a2b8",
          config: new ControlDateConfig,
          label:"Creado",
          width:new FieldWidthOptions()
        }),
        "enviado": new FieldWrapCardConfig({
          backgroundColor:"#007bff",
          config: new ControlDateConfig,
          label:"Enviado",
          width:new FieldWidthOptions()
        }),
        "evaluado": new FieldWrapCardConfig({
          config: new ControlDateConfig,
          label:"Evaluado",
          width:new FieldWidthOptions()
        }),
        "modificado": new FieldWrapCardConfig({
          backgroundColor:"#6c757d",
          config: new ControlDateConfig,
          label:"Modificado",
          width:new FieldWidthOptions()
        }),
      }
    })}
  })

  ngOnInit() {
    super.ngOnInit();  
    this.form.valueChanges.subscribe(
      values => {
        if(values["tramite_excepcional"]["estado"] == "Aprobado"){
          this.config.controls["tramite_excepcional"].controls["evaluado"].backgroundColor = "#aaff80" 
        } else {
          this.config.controls["tramite_excepcional"].controls["evaluado"].backgroundColor = "#ff8080" 
        }
      }
    )
  }

  reload(){
    this.back();
  }
}

