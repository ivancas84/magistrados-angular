import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Observable } from 'rxjs';
import { Display } from '@class/display';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-afiliacion-fieldset',
  templateUrl: './afiliacion-fieldset.component.html',
})
export class AfiliacionFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'afiliacion';

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
      estado: [null, {
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

  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get creado() { return this.fieldset.get('creado')}
  get enviado() { return this.fieldset.get('enviado')}
  get evaluado() { return this.fieldset.get('evaluado')}
  get modificado() { return this.fieldset.get('modificado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
