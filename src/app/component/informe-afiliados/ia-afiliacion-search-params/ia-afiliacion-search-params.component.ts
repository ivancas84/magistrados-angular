import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';

@Component({
  selector: 'app-ia-afiliacion-search-params',
  templateUrl: './ia-afiliacion-search-params.component.html',
})
export class IaAfiliacionSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      motivo: null,
      estado: null,
      creado_date: null,
      enviado_date: null,
      evaluado_date: null,
      modificado_date: null,
      modificado_is_set: null,
      persona: null,
      per_organo: null,
      per_departamento_judicial: null,
      per_cargo: null,

    });
    return fg;
  }

  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get creadoDate() { return this.fieldset.get('creado_date')}
  get enviadoDate() { return this.fieldset.get('enviado_date')}
  get evaluadoDate() { return this.fieldset.get('evaluado_date')}
  get modificadoDate() { return this.fieldset.get('modificado_date')}
  get modificadoIsSet() { return this.fieldset.get('modificado_is_set')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}
  get organo() { return this.fieldset.get('per_organo')}
  get departamentoJudicial() { return this.fieldset.get('per_departamento_judicial')}
  get cargo() { return this.fieldset.get('per_cargo')}

}
