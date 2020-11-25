import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';

@Component({
  selector: 'app-importe-afiliacion-search-params',
  templateUrl: './importe-afiliacion-search-params.component.html',
})
export class ImporteAfiliacionSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      "periodo.ym": null,
      "afi_per-departamento_judicial": null,
      "afi_per-organo": null,
    });
    return fg;
  }

  get periodo() { return this.fieldset.controls['periodo.ym']}
  get departamentoJudicial() { return this.fieldset.controls['afi_per-departamento_judicial']}
  get organo() { return this.fieldset.controls['afi_per-organo']}

}
