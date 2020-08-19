import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Observable } from 'rxjs';
import { Display } from '@class/display';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-afiliacion-fieldset',
  templateUrl: './afiliacion-fieldset.component.html',
})
export class AfiliacionFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'afiliacion';

  readonly defaultValues: {[key:string]: any} = {motivo: "Alta", estado: "Creado"}

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
      persona: [null, {
        validators: [Validators.required],
      }],
    });
    return fg;
  }

  initData(): void {
    /**
     * No suscribirse desde el template!
     * Puede disparar errores ExpressionChanged... no deseados (por ejemplo en la validacion inicial)
     * Al suscribirse desde el template se cambia el Lifehook cycle ?
     */  
      var s = this.data$.subscribe(
        response => {
          if(this.formValues) {
            console.log("voy a inicializar con storage")
            console.log(this.formValues);
            var d = this.formValues.hasOwnProperty(this.entityName)? this.formValues[this.entityName] : null;
            (d) ? this.fieldset.reset(d) : this.fieldset.reset();
            this.formValues = null;
          } else {
            console.log("voy a inicializar sin storage");
            console.log(response);
            this.initValues(response);
            /**
             * response puede tener el valor de algunos datos, por las dudas inicializo los valores por defecto
             */
          }
          if(response && response.hasOwnProperty("modificado") && response["modificado"]) this.motivo.disable();
        }
      );
      this.subscriptions.add(s);
  }


  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
