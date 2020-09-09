import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      creado_ym: null,
      enviado_ym: null,
      evaluado_ym: null,
      modificado_ym: null,
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
  get creadoYm() { return this.fieldset.get('creado_ym')}
  get enviadoYm() { return this.fieldset.get('enviado_ym')}
  get evaluadoYm() { return this.fieldset.get('evaluado_ym')}
  get modificadoYm() { return this.fieldset.get('modificado_ym')}
  get modificadoIsSet() { return this.fieldset.get('modificado_is_set')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}
  get organo() { return this.fieldset.get('per_organo')}
  get departamentoJudicial() { return this.fieldset.get('per_departamento_judicial')}
  get cargo() { return this.fieldset.get('per_cargo')}

}
