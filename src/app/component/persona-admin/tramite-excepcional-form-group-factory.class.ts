import { FormControl, FormGroup } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";

export class TramiteExcepcionalFormGroupFactory implements FormGroupFactory{

  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(null),
      "motivo":new FormControl(null),
      "estado":new FormControl(null),
      "codigo":new FormControl(null),
      "departamento_judicial":new FormControl(null),
      "organo":new FormControl(null),
      "creado":new FormControl(null),
      "enviado":new FormControl(null),
      "evaluado":new FormControl(null),
      "modificado":new FormControl(null),
      "observaciones":new FormControl(null),
      "desde":new FormControl(null),
      "hasta":new FormControl(null),
      "monto":new FormControl(null),

      //"_delete":new FormControl(null),
    });
    fg.disable()
    return fg;
  }
}