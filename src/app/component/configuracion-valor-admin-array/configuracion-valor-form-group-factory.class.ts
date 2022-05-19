import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ConfigFormGroupFactory, FormArrayConfig, FormGroupConfig } from "@class/reactive-form-config";
import { DdAsyncValidatorsService } from "@service/validators/dd-async-validators.service";
import { ValidatorsService } from "@service/validators/validators.service";


export class ConfiguracionValorFormGroupFactory extends ConfigFormGroupFactory{

  constructor(
    config: FormArrayConfig | FormGroupConfig,
    protected validators: DdAsyncValidatorsService, 
  ) { 
    super(config)
  }

  override formGroup(): FormGroup {
    var fg = new FormGroup({
      "valor":new FormControl(null, {
        validators:[Validators.required, ValidatorsService.real(2)], 
        asyncValidators:[this.validators.unique("nombre","departamento_judicial")]
      }),
    });

    this.formGroupAssign(fg)

    return fg;
  }
}