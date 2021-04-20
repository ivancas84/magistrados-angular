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
import { AdminArrayComponent } from '@component/admin-array/admin-array.component';
import { FieldControlOptions, FieldHiddenOptions, FieldInputTextOptions } from '@class/field-type-options';

@Component({
  selector: 'app-sucursal-admin-array',
  templateUrl: './sucursal-admin-array.component.html',
})
export class SucursalAdminArrayComponent extends AdminArrayComponent {

  readonly entityName: string = "sucursal";
  title: string = "Concepto Registro 80"
  
  fieldsViewOptions: FieldViewOptions[] = [
    new FieldViewOptions({
      field:"id",
      label:"Id",
      type: new FieldHiddenOptions
    }),

    new FieldViewOptions({
      field:"descripcion",
      label:"Descripcion",
      type:new FieldInputTextOptions,
      control: new FieldControlOptions({
        validators: [Validators.required],
      })
    }),

  ];  
}

