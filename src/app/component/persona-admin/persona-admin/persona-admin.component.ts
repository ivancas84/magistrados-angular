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
import { FieldControl } from '@class/field-control';

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


  fieldsControl: FieldControl[] = [
    new FieldControl({
      field:"id",
      label:"Id",
      type: "hidden",
    }),

    new FieldControl({
      field:"nombres",
      label:"Nombres",
    }),

    new FieldControl({
      field:"apellidos",
      label:"Apellidos",
    }),

    new FieldControl({
      field:"legajo",
      label:"Legajo",
      validators: [Validators.required],
      asyncValidators: [this.validators.unique('legajo', 'persona')],
      uniqueRoute:'persona-admin',
      widthGtSm: "20%" //screen and (min-width: 960px)
    }),
    
    new FieldControl({
      field:"tipo_documento",
      label:"Tipo Documento",
      type: "select",
      entityName: "tipo_documento",
      widthGtSm: "10%",
      widthSm: "15%"

    }),

    new FieldControl({
      field:"numero_documento",
      label:"Numero Documento",
      asyncValidators: [this.validators.unique('numero_documento', 'persona')],
      uniqueRoute:'persona-admin',
      widthGtSm: "20%",
      widthSm: "35%"
    }),

    new FieldControl({
      field:"telefono_laboral",
      label:"Telefono Laboral",
    }),

    new FieldControl({
      field:"telefono_particular",
      label:"Telefono Particular",
    }),

    new FieldControl({
      field:"fecha_nacimiento",
      label:"Fecha Nacimiento",
      type: "date",
    }),

    new FieldControl({
      field:"email",
      label:"Email",
      validators: [Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}")],
      asyncValidators: [],
    }),

    new FieldControl({
      field:"tribunal",
      label:"Tribunal",
      widthGtSm: "18%",
      //widthSm: "15%"

    }),

    new FieldControl({
      field:"cargo",
      label:"Cargo",
      type: "select",
      entityName: "cargo",
      widthGtSm: "14%",
      widthSm: "20%"

    }),

    new FieldControl({
      field:"organo",
      label:"Organo",
      type: "select",
      entityName: "organo",
      validators: [Validators.required],
      asyncValidators: [],
      widthGtSm: "18%",
      widthSm: "30%"
    }),

    new FieldControl({
      field:"departamento_judicial",
      label:"Departamento Judicial",
      type: "select",
      entityName: "departamento_judicial",
      validators: [Validators.required],
      asyncValidators: [],
    }),

    new FieldControl({
      field:"departamento_judicial_informado",
      label:"Departamento Judicial Informado",
      type: "select",
      entityName: "departamento_judicial",
      disabled:true
    }),

    


  ];
}

