import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { fastClone } from '@function/fast-clone';

@Component({
  selector: 'app-afiliacion-fieldset',
  templateUrl: './afiliacion-fieldset.component.html',
})
export class AfiliacionFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'afiliacion';

  readonly defaultValues: {[key:string]: any} = {motivo: "Alta", estado: "Creado"}

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
        validators: [Validators.required],
      }],
      estado: [{value: null, disabled: true}, {
        validators: [Validators.required],
      }],
      observaciones: [null, {
      }],
      persona: [null, {
        validators: [Validators.required],
      }],
    });
    return fg;
  }

  initValues(response: {[key:string]: any} = {}){
    if(!response) {
      this.fieldset.reset(this.defaultValues);
    } else {
      var res = fastClone(response);
      for(var key in this.defaultValues){
        if(this.defaultValues.hasOwnProperty(key)){
          if(!res.hasOwnProperty(key)) res[key] = this.defaultValues[key];
        }
      }
      this.fieldset.reset(res) 
    }
    if(response && response.hasOwnProperty("modificado") && response["modificado"]) this.motivo.disable();
  }

  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
