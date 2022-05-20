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
export class ImporteDeleteComponent extends AdminComponent implements OnInit {
  
  entityName: string = "importe"

  inputSearchGo: boolean = false

  form: FormGroup = this.fb.group({
    "importe": this.fb.group({
      "periodo":this.fb.control(moment(), Validators.required),
      "organo":this.fb.control(null, Validators.required),
    })
  })

  config: FormStructureConfig = new FormStructureConfig({
    controls: {
      "importe": new FieldsetDynamicConfig({
        entityName:this.entityName,
        title:"Eliminar ",
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
        }
      })
    }
  });

  
  persist(): Observable<any> {
    return this.dd._post("delete", this.entityName, this.serverData());
  }

  reload(){
    console.log("Imprimir mensaje de importes eliminados");
  }
}

