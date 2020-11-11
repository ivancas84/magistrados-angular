import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldsetArrayComponent } from '@component/fieldset-array/fieldset-array.component';

@Component({
  selector: 'app-departamento-judicial-fieldset-array',
  templateUrl: './departamento-judicial-fieldset-array.component.html',
})
export class DepartamentoJudicialFieldsetArrayComponent extends FieldsetArrayComponent {

readonly entityName: string = 'departamento_judicial';

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
      codigo: [null, {
        validators: [Validators.required],
      }],
      nombre: [null, {
      }],
      _delete: [null, {}]
    });
    return fg;
  }

  id(index: number) { return this.fieldset.at(index).get('id')}
  codigo(index: number) { return this.fieldset.at(index).get('codigo')}
  nombre(index: number) { return this.fieldset.at(index).get('nombre')}
  _delete(index: number) { return this.fieldset.at(index).get('_delete')}

}
