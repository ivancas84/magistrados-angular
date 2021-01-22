import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';

@Component({
  selector: 'app-tramite-excepcional-fieldset',
  templateUrl: './tramite-excepcional-fieldset.component.html',
})
export class TramiteExcepcionalFieldsetComponent extends FieldsetComponent {

readonly entityName: string = 'tramite_excepcional';

  readonly defaultValues: {[key:string]: any} = {motivo: "Alta", estado: "Creado",sucursal:"1"}

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected router: Router, 
    protected storage: SessionStorageService 
  ) {
    super(router, storage);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:null,
      motivo: [null, {
        validators: [Validators.required],
      }],
      estado: [{value: null, disabled: true}, {
        validators: [Validators.required],
      }],
      observaciones: [null, {
      }],
      desde: [null, {
      }],
      hasta: [null, {
      }],
      monto: [null, {
        validators: [Validators.pattern('^-?[0-9]+(\\.[0-9]{1,2})?$'),Validators.max(99999999999999999.99),Validators.min(-99999999999999999.99)],
      }],
      persona: [null, {
        validators: [Validators.required],
      }],
      sucursal: [null, {
        validators: [Validators.required],
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get enviado() { return this.fieldset.get('enviado')}
  get evaluado() { return this.fieldset.get('evaluado')}
  get modificado() { return this.fieldset.get('modificado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get desde() { return this.fieldset.get('desde')}
  get hasta() { return this.fieldset.get('hasta')}
  get monto() { return this.fieldset.get('monto')}
  get persona() { return this.fieldset.get('persona')}
  get sucursal() { return this.fieldset.get('sucursal')}

  resetForm(values: {[key:string]: any}){
    this.fieldset.reset(values);
    if(values && (
        (values.hasOwnProperty("modificado") && values["modificado"])
        || (values.hasOwnProperty("enviado") && values["enviado"])
        || (values.hasOwnProperty("evaluado") && values["evaluado"])
    )) {
      this.motivo.disable();
      this.desde.disable();
      this.hasta.disable();
      this.monto.disable();
      this.sucursal.disable()
    }
  }

}
