import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-archivo-afiliaciones-create-fieldset',
  templateUrl: './archivo-afiliaciones-create-fieldset.component.html',
})
export class  ArchivoAfiliacionesCreateFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'archivo_afiliaciones';

  readonly defaultValues: {[key:string]: any} = {};

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
    });
    return fg;
  }

  get organo() { return this.fieldset.get('organo')}

}
