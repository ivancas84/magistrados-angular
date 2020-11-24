import { Component } from '@angular/core';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-persona-fieldset',
  templateUrl: './persona-fieldset.component.html',
})
export class PersonaFieldsetComponent extends FieldsetComponent {

  readonly entityName: string = 'persona';

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
      nombres: [null, {
      }],
      apellidos: [null, {
      }],
      legajo: [null, {
        validators: [Validators.required],
        asyncValidators: [this.validators.unique('legajo', 'persona')],
      }],
      numero_documento: [null, {
        asyncValidators: [this.validators.unique('numero_documento', 'persona')],
      }],
      telefono_laboral: [null, {
      }],
      telefono_particular: [null, {
      }],
      fecha_nacimiento: [null, {
      }],
      email: [null,  {
        validators: [  	Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]
      }],
      cargo: [null, {
      }],
      organo: [null, {
        validators: [Validators.required],
      }],
      departamento_judicial: [null, {
        
        validators: [Validators.required],
      }],
      departamento_judicial_informado: [{value:null,disabled:true}, {
      }],
      tipo_documento: [null, {
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get nombres() { return this.fieldset.get('nombres')}
  get apellidos() { return this.fieldset.get('apellidos')}
  get legajo() { return this.fieldset.get('legajo')}
  get numeroDocumento() { return this.fieldset.get('numero_documento')}
  get telefonoLaboral() { return this.fieldset.get('telefono_laboral')}
  get telefonoParticular() { return this.fieldset.get('telefono_particular')}
  get fechaNacimiento() { return this.fieldset.get('fecha_nacimiento')}
  get email() { return this.fieldset.get('email')}
  get creado() { return this.fieldset.get('creado')}
  get eliminado() { return this.fieldset.get('eliminado')}
  get cargo() { return this.fieldset.get('cargo')}
  get organo() { return this.fieldset.get('organo')}
  get departamentoJudicial() { return this.fieldset.get('departamento_judicial')}
  get departamentoJudicialInformado() { return this.fieldset.get('departamento_judicial_informado')}

  get tipoDocumento() { return this.fieldset.get('tipo_documento')}

}
