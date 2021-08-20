import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';
import { FormBuilderService } from '@service/form-builder/form-builder.service';

@Component({
  selector: 'app-importe-summary-search-params',
  templateUrl: './importe-summary-search-params.component.html',
})
export class ImporteSummarySearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilderService, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      organo: [null, {
        //validators: [Validators.required],
      }],
      periodo: [null, {
        validators: [Validators.required],
      }],
      departamento_judicial: [null, {
        //validators: [Validators.required],
      }],
    });
    return fg;
  }

  get organo() { return this.fieldset.get('organo')}
  get periodo() { return this.fieldset.get('periodo')}
  get departamentoJudicial() { return this.fieldset.get('departamento_judicial')}

}
