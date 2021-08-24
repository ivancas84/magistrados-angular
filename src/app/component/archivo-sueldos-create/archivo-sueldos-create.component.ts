import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputSelectLabelConfig } from '@component/input-select-label/input-select-label.component';
import { FieldWidthOptions } from '@class/field-width-options';

@Component({
  selector: 'app-archivo-sueldos-create',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class ArchivoSueldosCreateComponent extends AdminComponent implements OnInit {
  
  entityName: string = "archivo_sueldos"

  inputSearchGo: boolean = false

  form: FormGroup = this.fb.group({
    "archivo_sueldos": this.fb.group({
      "periodo":this.fb.control(moment(), Validators.required),
      "organo":this.fb.control(null, Validators.required),
      "tipo":this.fb.control(null, Validators.required),
    })
  })

  config: FormStructureConfig = new FormStructureConfig({
    controls: {
      "archivo_sueldos": new FieldsetDynamicConfig({
        entityName:this.entityName,
        title:"Crear archivo de Sueldos ",
        controls:{
          "periodo": new InputYmConfig({
            label: "Período",
            validatorMsgs: [ new RequiredValidatorMsg, ],
            width: new FieldWidthOptions()
          }),
          "organo": new InputSelectConfig({
            entityName: "organo",
            label: "Órgano",
            validatorMsgs: [ new RequiredValidatorMsg, ],
            width: new FieldWidthOptions()
          }),
          "tipo": new InputSelectLabelConfig({
            options:  [{id:"afiliacion",label:"Registro 40"}, {id:"tramite_excepcional", label:"Registro 80"}],
            label: "Tipo",
            validatorMsgs: [ new RequiredValidatorMsg, ],
            width: new FieldWidthOptions()
          })
        }
      })
    }
  });

  
  persist(): Observable<any> {
    return this.dd.post("create", this.entityName, this.serverData());
  }

  reload(){
    console.log("visualizar lista de archivos creados ordenados de forma descendiente");
  }
}

