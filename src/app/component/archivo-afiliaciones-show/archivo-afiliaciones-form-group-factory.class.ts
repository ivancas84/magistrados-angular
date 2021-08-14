import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class ArchivoAfiliacionesFormGroupFactory implements FormGroupFactory{
  
  
  formGroup(): FormGroup {
    var fg = new FormGroup({
      "archivo":new FormControl(),
    });

    return fg;
  }
}