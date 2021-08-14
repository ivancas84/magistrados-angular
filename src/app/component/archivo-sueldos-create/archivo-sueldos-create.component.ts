import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ComponentOptions } from '@class/component-options';
import { FieldInputSelectLabelOptions, FieldInputSelectOptions, FieldInputSelectParamOptions, FieldInputYearMonthOptions } from '@class/field-type-options';
import { FieldsetDynamicOptions } from '@class/fieldset-dynamic-options';
import { FormControlConfig, FormGroupConfig, FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-archivo-sueldos-create',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class ArchivoSueldosCreateComponent extends AdminComponent implements OnInit {
  
  entityName: string = "archivo_sueldos"

  inputSearchGo: boolean = false

  adminForm: FormGroup = this.fb.group({
    "archivo_sueldos": this.fb.group({
      "periodo":this.fb.control(moment(), Validators.required),
      "organo":this.fb.control(null, Validators.required),
      "tipo":this.fb.control(null, Validators.required),
    })
  })

  configForm: FormStructureConfig = new FormStructureConfig({
    controls: {
      "archivo_sueldos": new FormGroupConfig({
        controls:{
          "periodo": new FormControlConfig({
            type: new FieldInputYearMonthOptions(),
            label: "Período",
            validatorMsgs: [ new RequiredValidatorMsg, ],
          }),
          "organo": new FormControlConfig({
            type: new FieldInputSelectOptions({
              entityName: "organo",
            }),
            label: "Órgano",
            validatorMsgs: [ new RequiredValidatorMsg, ],
          }),
          "tipo": new FormControlConfig({
            type: new FieldInputSelectLabelOptions({
              options:  [{id:"afiliacion",label:"Registro 40"}, {id:"tramite_excepcional", label:"Registro 80"}],
            }),
            label: "Tipo",
            validatorMsgs: [ new RequiredValidatorMsg, ],
          })

        }
      })
    }
  });

  configComponent: { [x: string]: ComponentOptions } = {
    "archivo_sueldos": new FieldsetDynamicOptions({
      entityName:this.entityName,
      title:"Crear archivo de Sueldos ",
    })
  }
  
  persist(): Observable<any> {
    return this.dd.post("create", this.entityName, this.serverData());
  }

  reload(response){
    console.log(response);
    console.log("visualizar lista de archivos creados ordenados de forma descendiente");
  }
}

