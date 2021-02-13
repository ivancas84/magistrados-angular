import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AdminArrayComponent } from '@component/admin-array/admin-array.component';
import { FieldViewOptions } from '@class/field-view-options';

@Component({
  selector: 'app-departamento-judicial-admin-array',
  templateUrl: './departamento-judicial-admin-array.component.html',
})
export class DepartamentoJudicialAdminArrayComponent extends AdminArrayComponent{

  readonly entityName: string = "departamento_judicial";

  fieldsViewOptions: FieldViewOptions[] = [
    new FieldViewOptions({
      field:"id",
      label:"Id",
      type: "hidden",
    }),

    new FieldViewOptions({
      field:"codigo",
      label:"Codigo",
      type:"input_text",
      validators: [Validators.required],
      asyncValidators: [],
    }),

    new FieldViewOptions({
      field:"nombre",
      label:"Nombre",
      type:"input_text",
    }),

  ];
}

