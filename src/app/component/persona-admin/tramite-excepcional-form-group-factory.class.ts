import { FormControl, FormGroup } from "@angular/forms";
import { FieldHiddenOptions, TypeLabelOptions, FieldDateOptions } from "@class/field-type-options";
import { RouterLinkOptions } from "@class/field-view-aux-options";
import { FormGroupFactory, FormGroupExt, FormControlExt } from "@class/reactive-form-ext";

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
    return fg;
  }
}