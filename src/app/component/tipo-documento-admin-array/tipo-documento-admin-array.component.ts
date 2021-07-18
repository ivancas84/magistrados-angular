import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldViewOptions } from '@class/field-view-options';
import { FieldControlOptions, FieldHiddenOptions, FieldInputTextOptions } from '@class/field-type-options';
import { AdminArrayDynamicComponent } from '@component/admin-array/admin-array-dynamic.component';

@Component({
  selector: 'app-tipo-documento-admin-array',
  templateUrl: '../../core/component/admin-array/admin-array-dynamic.component.html',
})
export class TipoDocumentoAdminArrayComponent extends AdminArrayDynamicComponent {

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

