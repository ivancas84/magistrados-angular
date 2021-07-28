import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FieldHiddenOptions, FieldInputTextOptions, FieldTextareaOptions } from '@class/field-type-options';
import { RouterLinkOptions } from '@class/field-view-aux-options';
import { FormGroupFactory, FormGroupExt, FormControlExt, FormArrayExt } from '@class/reactive-form-ext';
import { TableDynamicOptions } from '@class/table-dynamic-options';
import { RequiredValidatorMsg } from '@class/validator-msg';
import { AdminComponent } from '@component/admin/admin.component';
import { FieldViewAuxComponent } from '@component/field-view-aux/field-view-aux.component';
import { ShowComponent } from '@component/show/show.component';

class AfiliacionFormGroupFactory implements FormGroupFactory{

  formGroup(): FormGroupExt {
    var fg = new FormGroupExt({
      "id":new FormControlExt(),
      "motivo":new FormControlExt(),
      "per-nombres":new FormControlExt(),
      "persona":new FormControlExt(),

    });

    (fg.controls["id"] as FormControlExt).set({
      type: new FieldHiddenOptions()
    });

    (fg.controls["persona"] as FormControlExt).set({
      type: new FieldHiddenOptions()
    });

    (fg.controls["motivo"] as FormControlExt).set({
      label: "Motivo",
    });

    (fg.controls["per-nombres"] as FormControlExt).set({
      label: "Persona",
      aux: new RouterLinkOptions({
        path:"persona-admin",
        params: {id:"{{persona}}"} //utilizar {{key}} para identificar valor del conjunto de datos
      })
    });
    return fg;
  }
}

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class PersonaShowComponent extends ShowComponent {
  

  readonly entityName: string = "afiliacion"

  structure: FormArrayExt = new FormArrayExt([])

  configForm() {
    this.structure.set({
       factory:new AfiliacionFormGroupFactory,  
       position:3,
       options: new TableDynamicOptions({
         title: "Visualizacion de Afiliaciones"
      })
    });
    
   
  } 

}

