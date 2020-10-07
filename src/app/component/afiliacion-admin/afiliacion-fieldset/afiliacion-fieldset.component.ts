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

  ngOnInit() {    
    /**
     * Al inicializar el formulario se blanquean los valores del storage, por eso deben consultarse previamente
     */
    this.initForm();
    var s = this.initData().subscribe(
      response => {
        this.initValues(response);
        if(response && response.hasOwnProperty("modificado") && response["modificado"]) this.motivo.disable();
      }
    );
    this.subscriptions.add(s);
    /**
     * @todo no me suscribo desde el template porque dispara errores ExpressionChangedAfterIfCheckedValue
     * Un posible problema es que inicializo en null y despues asigno el valor a traves de reset o patchValue
     * Habria que ver si se puede efectuar todo el proceso de inicializacion del formulario y asignacion de valores en un mismo observable
     * Al suscribirse directamente en el ts no dispara los errores, se carga primero el formulario y despues se asigna el valor
     * Puede haber inconvenientes si se desea acceder al valueChanges en los subcomponentes,
     * la asignacion de datos iniciales no sera considerada como valueChange (se puede solucionar de la misma forma suscribiendose en el ts)
     */
  }
  

  get id() { return this.fieldset.get('id')}
  get motivo() { return this.fieldset.get('motivo')}
  get estado() { return this.fieldset.get('estado')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get persona() { return this.fieldset.get('persona')}

}
