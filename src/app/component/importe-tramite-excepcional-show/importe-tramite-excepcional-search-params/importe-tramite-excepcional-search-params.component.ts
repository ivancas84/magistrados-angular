import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';
import { FormBuilderService } from '@service/form-builder/form-builder.service';

@Component({
  selector: 'app-importe-tramite-excepcional-search-params',
  templateUrl: './importe-tramite-excepcional-search-params.component.html',
})
export class ImporteTramiteExcepcionalSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilderService, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      "periodo.ym": [null, {
        validators: [Validators.required],
      }],
      "te_per-departamento_judicial": [null, {
      }],
      "te_per-organo": [null, {
      }],
    });
    return fg;
  }

  get periodo() { return this.fieldset.controls['periodo.ym']}
  get departamentoJudicial() { return this.fieldset.controls['te_per-departamento_judicial']}
  get organo() { return this.fieldset.controls['te_per-organo']}

}
