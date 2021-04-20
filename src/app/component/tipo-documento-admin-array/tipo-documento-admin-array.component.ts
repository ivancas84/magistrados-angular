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
  selector: 'app-tipo-documento-admin-array',
  templateUrl: '../../core/component/admin-array/admin-array.component.html',
})
export class TipoDocumentoAdminArrayComponent extends AdminArrayComponent {

  readonly entityName: string = "tipo_documento"
  title: string = "Tipo Documento"

  fieldsViewOptions: FieldViewOptions[] = [
    new FieldViewOptions({
      field:"id",
      label:"Id",
      type: new FieldHiddenOptions,
    }),

    new FieldViewOptions({
      field:"descripcion",
      label:"Descripcion",
      type:new FieldInputTextOptions,
      control:new FieldControlOptions({
        validators: [Validators.required],
      })
    }),

  ];  
}
