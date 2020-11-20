import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';

@Component({
  selector: 'app-importe-summary-search-params',
  templateUrl: './importe-summary-search-params.component.html',
})
export class ImporteSummarySearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      organo: null,
      periodo: null,
      creado: null,
    });
    return fg;
  }

  get organo() { return this.fieldset.get('organo')}
  get periodo() { return this.fieldset.get('periodo')}
  get creado() { return this.fieldset.get('creado')}

}
