import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";
import { ValidatorsService } from "@service/validators/validators.service";


export class SucursalFormGroupFactory implements FormGroupFactory{

  constructor(
    protected validators: ValidatorsService, 
  ) { }

  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(null),
      "descripcion":new FormControl(null, {
        validators:[Validators.required], 
        asyncValidators:[this.validators.unique("codigo","departamento_judicial")]
      }),
      "_mode":new FormControl(),
    });

    return fg;
  }
}