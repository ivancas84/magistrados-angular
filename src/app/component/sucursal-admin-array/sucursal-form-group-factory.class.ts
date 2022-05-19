import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfigFormGroupFactory, FormArrayConfig, FormGroupConfig } from "@class/reactive-form-config";
import { DdAsyncValidatorsService } from "@service/validators/dd-async-validators.service";
import { ValidatorsService } from "@service/validators/validators.service";


export class SucursalFormGroupFactory extends ConfigFormGroupFactory{

  constructor(
    config: FormArrayConfig | FormGroupConfig,
    protected validators: DdAsyncValidatorsService, 
  ) {
    super(config)
   }

  override formGroup(): FormGroup {
    var fg = new FormGroup({
      "descripcion":new FormControl(null, {
        validators:[Validators.required], 
        asyncValidators:[this.validators.unique("codigo","departamento_judicial")]
      }),
    });

    this.formGroupAssign(fg)

    return fg;
  }
}