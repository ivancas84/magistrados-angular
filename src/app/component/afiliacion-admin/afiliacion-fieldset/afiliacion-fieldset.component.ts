import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { RequiredValidatorOpt } from '@class/validator-opt';

@Component({
  selector: 'app-afiliacion-fieldset',
  templateUrl: './afiliacion-fieldset.component.html',
})
export class AfiliacionFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'afiliacion';

  readonly defaultValues: {[key:string]: any} = {motivo: "Alta", estado: "Creado"}

  requiredValidatorOpt: RequiredValidatorOpt = new RequiredValidatorOpt
  
  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected router: Router, 
    protected storage: SessionStorageService 
  ) {
    super(router, storage);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:null,
      motivo: [null, {
        validators: [this.requiredValidatorOpt.fn],
      }],
      estado: [{value: null, disabled: true}, {
        validators: [this.requiredValidatorOpt.fn],
      }],
      codigo: [{value: null}, {
        validators: [this.requiredValidatorOpt.fn],
      }],
      observaciones: [null, {
      }],
      persona: [null, {
        validators: [this.requiredValidatorOpt.fn],
      }],
    });
    return fg;
  }

  resetForm(values: {[key:string]: any}){
    this.fieldset.reset(values);
    if(values && (
      (values.hasOwnProperty("modificado") && values["modificado"])
      || (values.hasOwnProperty("enviado") && values["enviado"])
      || (values.hasOwnProperty("evaluado") && values["evaluado"])
    )) {
       this.motivo.disable();
    }
  }

  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get codigo() { return this.fieldset.get('codigo')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
