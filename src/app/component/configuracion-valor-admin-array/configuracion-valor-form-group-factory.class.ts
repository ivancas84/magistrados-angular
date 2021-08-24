import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FormGroupFactory } from "@class/reactive-form-config";
import { ValidatorsService } from "@service/validators/validators.service";


export class ConfiguracionValorFormGroupFactory implements FormGroupFactory{

  constructor(
    protected validators: ValidatorsService, 
  ) { }

  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(null),
      "nombre":new FormControl(null, {
        validators:[Validators.required], 
      }),
      "desde":new FormControl(null, {
        validators:[Validators.required], 
      }),
      "valor":new FormControl(null, {
        validators:[Validators.required, ValidatorsService.real(2)], 
        asyncValidators:[this.validators.unique("nombre","departamento_judicial")]
      }),
      "_mode":new FormControl(),
    });

    return fg;
  }
}