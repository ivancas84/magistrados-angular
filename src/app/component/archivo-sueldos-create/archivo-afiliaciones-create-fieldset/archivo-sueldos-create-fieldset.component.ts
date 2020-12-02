import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-archivo-sueldos-create-fieldset',
  templateUrl: './archivo-sueldos-create-fieldset.component.html',
})
export class  ArchivoSueldosCreateFieldsetComponent extends FieldsetComponent {

  readonly defaultValues: {[key:string]: any} = {periodo: new Date()};
  readonly tipoOptions = [{id:"afiliacion",label:"Registro 40"}, {id:"tramite_excepcional", label:"Registro 80"}];

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
      organo: [null, {
        validators: [Validators.required],
      }],
      periodo: [null, {
        validators: [Validators.required],
      }],
      tipo: [null, {
        validators: [Validators.required],
      }],
    });
    return fg;
  }

  get organo() { return this.fieldset.get('organo')}
  get periodo() { return this.fieldset.get('periodo')}
  get tipo() { return this.fieldset.get('tipo')}

}
