import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Display } from '@class/display';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';

@Component({
  selector: 'app-afiliacion-search-params',
  templateUrl: './afiliacion-search-params.component.html',
})
export class AfiliacionSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      motivo: null,
      estado: null,
      creado: null,
      enviado: null,
      evaluado: null,
      modificado: null,
      persona: null,
    });
    return fg;
  }

  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get creado() { return this.fieldset.get('creado')}
  get enviado() { return this.fieldset.get('enviado')}
  get evaluado() { return this.fieldset.get('evaluado')}
  get modificado() { return this.fieldset.get('modificado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
