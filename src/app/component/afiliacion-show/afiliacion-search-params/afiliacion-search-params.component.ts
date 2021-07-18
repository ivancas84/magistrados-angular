import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';
import { FormBuilderService } from '@service/form-builder/form-builder.service';

@Component({
  selector: 'app-afiliacion-search-params',
  templateUrl: './afiliacion-search-params.component.html',
})
export class AfiliacionSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilderService, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      motivo: null,
      estado: null,      
      persona: null,
      "creado.ym": null,
      "enviado.ym": null,
      "evaluado.ym": null,
      "modificado.ym": null,    
      "per-organo": null,
      "per-departamento_judicial": null,
      "per-departamento_judicial_informado": null,
      "per-cargo": null,
      "modificado.is_set": null,
    });



    return fg;

  }

  get motivo() { return this.fieldset.controls['motivo']}
  get estado() { return this.fieldset.controls['estado']}
  get creadoYm() { return this.fieldset.controls['creado.ym'];}
  get enviadoYm() { return this.fieldset.controls['enviado.ym']}
  get evaluadoYm() { return this.fieldset.controls['evaluado.ym']}
  get modificadoYm() { return this.fieldset.controls['modificado.ym']}
  get modificadoIsSet() { return this.fieldset.controls['modificado.is_set']}
  get observaciones() { return this.fieldset.controls['observaciones']}
  get persona() { return this.fieldset.controls['persona']}
  get organo() { return this.fieldset.controls['per-organo']}
  get departamentoJudicial() { return this.fieldset.controls['per-departamento_judicial']}
  get departamentoJudicialInformado() { return this.fieldset.controls['per-departamento_judicial_informado']}
  get cargo() { return this.fieldset.controls['per-cargo']}

}
