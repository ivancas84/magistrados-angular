import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class ImporteSummaryFormGroupFactory implements FormGroupFactory{
  

  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(),
      "nombre":new FormControl(),
      "afiliaciones":new FormControl(),
      "importe":new FormControl(),
      "cuota_asociativa":new FormControl(),
      "fam":new FormControl(),
      "total_deduccion":new FormControl(),
      "total_pagar":new FormControl(),
      "viatico":new FormControl(),
    });

    return fg;
  }
}