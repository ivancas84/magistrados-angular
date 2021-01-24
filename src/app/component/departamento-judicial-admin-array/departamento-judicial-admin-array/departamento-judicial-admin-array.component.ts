import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AdminArrayComponent } from '@component/admin-array/admin-array.component';
import { FieldControl } from '@class/field-control';

@Component({
  selector: 'app-departamento-judicial-admin-array',
  templateUrl: './departamento-judicial-admin-array.component.html',
})
export class DepartamentoJudicialAdminArrayComponent extends AdminArrayComponent{

  readonly entityName: string = "departamento_judicial";

  fieldsControl: FieldControl[] = [
    new FieldControl({
      field:"id",
      label:"Id",
      type: "hidden",
    }),

    new FieldControl({
      field:"codigo",
      label:"Codigo",
      validators: [Validators.required],
      asyncValidators: [],
    }),

    new FieldControl({
      field:"nombre",
      label:"Nombre",
    }),

  ];
}

