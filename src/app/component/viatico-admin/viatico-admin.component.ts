import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormStructureConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { FieldsetDynamicConfig } from '@component/fieldset/fieldset-dynamic.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { ValidatorsService } from '@service/validators/validators.service';
import * as moment from 'moment';

@Component({
  selector: 'app-persona-admin',
  templateUrl: '../../core/component/admin/admin.component.html',
})
export class ViaticoAdminComponent extends AdminComponent implements OnInit{
  
  readonly entityName: string = "viatico"
  inputSearchGo: boolean = false;

  form: FormGroup = this.fb.group({
    "viatico":this.fb.group({
      "id":this.fb.control(null),
      "valor":this.fb.control(null, {validators: [Validators.required, ValidatorsService.real(2)]}),
      "periodo":this.fb.control(null, Validators.required),
      "departamento_judicial":this.fb.control(null, Validators.required),
    }),
  }); 

  config: FormStructureConfig = new FormStructureConfig({
    controls: {"viatico": new FieldsetDynamicConfig({
      entityName:"viatico",
      title:"Viatico",
      controls: {
        "periodo": new InputYmConfig({
          label: "periodo",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"}),
          default:moment()
        }),
        "departamento_judicial": new InputSelectConfig({
          entityName: "departamento_judicial",
          label: "Departamento Judicial",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions({gtSm:"34%"})
        }),
        "valor": new InputTextConfig({
          label: "Valor",
          validatorMsgs: [ new RequiredValidatorMsg, ],
          width:new FieldWidthOptions()
        }),
      }
    })}
  })

  reload(){
    this.back();
  }
}

