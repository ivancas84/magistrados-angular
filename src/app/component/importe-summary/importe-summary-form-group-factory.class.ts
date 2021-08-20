import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class ImporteSummaryFormGroupFactory implements FormGroupFactory{
  
  
  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(),
      "afiliaciones":new FormControl(),
    });

    return fg;
  }
}