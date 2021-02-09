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
import { AdminArrayComponent } from '@component/admin-array/admin-array.component';

@Component({
  selector: 'app-tipo-documento-admin-array',
  templateUrl: '../../core/component/admin-array/admin-array.component.html',
})
export class TipoDocumentoAdminArrayComponent extends AdminArrayComponent {

  readonly entityName: string = "tipo_documento"
  title: string = "Tipo Documento"

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
      field:"descripcion",
      label:"Descripcion",
      validators: [Validators.required],
      asyncValidators: [],
    }),

  ];  
}

