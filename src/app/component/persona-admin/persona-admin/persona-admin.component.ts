import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminComponent } from '@component/admin/admin.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldViewOptions } from '@class/field-view-options';

@Component({
  selector: 'app-persona-admin',
  templateUrl: './persona-admin.component.html',
})
export class PersonaAdminComponent extends AdminComponent {

  readonly entityName: string = "persona";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar
  ) {
    super(fb, route, router, location, dd, storage, dialog, snackBar);
  }


  fieldsViewOptions: FieldViewOptions[] = [
    new FieldViewOptions({
      field:"id",
      label:"Id",
      type: "hidden",
    }),

    new FieldViewOptions({
      field:"nombres",
      label:"Nombres",
      type:"input_text"
    }),

    new FieldViewOptions({
      field:"apellidos",
      label:"Apellidos",
      type:"input_text"
    }),

    new FieldViewOptions({
      field:"legajo",
      label:"Legajo",
      type:"input_text",
      validators: [Validators.required],
      asyncValidators: [this.validators.unique('legajo', 'persona')],
      uniqueRoute:'persona-admin',
      widthGtSm: "20%" //screen and (min-width: 960px)
    }),
    
    new FieldViewOptions({
      field:"tipo_documento",
      label:"Tipo Documento",
      type: "input_select",
      entityNameRef: "tipo_documento",
      widthGtSm: "10%",
      widthSm: "15%"
    }),

    new FieldViewOptions({
      field:"numero_documento",
      label:"Numero Documento",
      asyncValidators: [this.validators.unique('numero_documento', 'persona')],
      uniqueRoute:'persona-admin',
      widthGtSm: "20%",
      widthSm: "35%",
      type:"input_text",
    }),

    new FieldViewOptions({
      field:"telefono_laboral",
      label:"Telefono Laboral",
      type:"input_text",
    }),

    new FieldViewOptions({
      field:"telefono_particular",
      label:"Telefono Particular",
      type:"input_text",
    }),

    new FieldViewOptions({
      field:"fecha_nacimiento",
      label:"Fecha Nacimiento",
      type: "input_date",
    }),

    new FieldViewOptions({
      field:"email",
      label:"Email",
      type: "input_text",
      validators: [Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}")],
      asyncValidators: [],
    }),

    new FieldViewOptions({
      field:"tribunal",
      label:"Tribunal",
      widthGtSm: "18%",
      //widthSm: "15%"
      type: "input_text",
    }),

    new FieldViewOptions({
      field:"cargo",
      label:"Cargo",
      type: "input_select",
      entityNameRef: "cargo",
      widthGtSm: "14%",
      widthSm: "20%"

    }),

    new FieldViewOptions({
      field:"organo",
      label:"Organo",
      type: "input_select",
      entityNameRef: "organo",
      validators: [Validators.required],
      asyncValidators: [],
      widthGtSm: "18%",
      widthSm: "30%"
    }),

    new FieldViewOptions({
      field:"departamento_judicial",
      label:"Departamento Judicial",
      type: "input_select",
      entityNameRef: "departamento_judicial",
      validators: [Validators.required],
      asyncValidators: [],
    }),

    new FieldViewOptions({
      field:"departamento_judicial_informado",
      label:"Departamento Judicial Informado",
      type: "input_select",
      entityNameRef: "departamento_judicial",
      disabled:true
    }),

    


  ];
}

