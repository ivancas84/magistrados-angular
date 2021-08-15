import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class TramiteExcepcionalFormGroupFactory implements FormGroupFactory{
  
  
  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(),
      "persona":new FormControl(),
      "per-legajo":new FormControl(),
      "codigo":new FormControl(),
      "departamento_judicial":new FormControl(),
      "desde":new FormControl(),
      "hasta":new FormControl(),
      "motivo":new FormControl(),
      "estado":new FormControl(),
      "creado":new FormControl(),
      "enviado":new FormControl(),
      "evaluado":new FormControl(),
      "modificado":new FormControl(),
      "organo":new FormControl(),
      //"_delete":new FormControlExt(),
    });

    return fg;
  }
}