import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class AfiliacionFormGroupFactory implements FormGroupFactory{
  
  
  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(),
      "motivo":new FormControl(),
      "estado":new FormControl(),
      "codigo":new FormControl(),
      "departamento_judicial":new FormControl(),
      "organo":new FormControl(),
      "creado":new FormControl(),
      "enviado":new FormControl(),
      "evaluado":new FormControl(),
      "modificado":new FormControl(),
      "observaciones":new FormControl(),
      //"_delete":new FormControlExt(),
    });

    return fg;
  }
}