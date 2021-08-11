import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ComponentOptions } from '@class/component-options';
import { FieldHiddenOptions, FieldInputAutocompleteOptions, FieldInputTextOptions, FieldViewOptions, TypeLabelOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { FormArrayConfig, FormConfig, FormControlConfig, FormStructureConfig } from '@class/reactive-form-config';
import { TableDynamicOptions } from '@class/table-dynamic-options';
import { ShowComponent } from '@component/show/show.component';
import { AfiliacionFormGroupFactory } from './afiliacion-form-group-factory.class';

@Component({
  selector: 'app-persona-show',
  templateUrl: '../../core/component/show/show.component.html',
})
export class AfiliacionShowComponent extends ShowComponent {
  readonly entityName: string = "afiliacion"

  tableOptions: ComponentOptions = new TableDynamicOptions({
    title:"Visualización de Afiliaciones"
  })

  form: FormArray = new FormArray([])

  configForm: FormArrayConfig = new FormArrayConfig({
    factory:new AfiliacionFormGroupFactory,  
    controls: {
      "id": new FormControlConfig({
        type: new FieldHiddenOptions
      }),
      "motivo": new FormControlConfig({
        label:"Motivo"
      }),
      "estado": new FormControlConfig({
        label:"Estado"
      }),
      "codigo": new FormControlConfig({
        label:"Cód"
      }),
      "departamento_judicial": new FormControlConfig({
        label:"Departamento",
        type: new TypeLabelOptions({entityName:"departamento_judicial"})
      }),
      "organo": new FormControlConfig({
        label:"Organo",
        type: new TypeLabelOptions({entityName:"organo"})
      }),
    }
  })

  searchForm: FormGroup = new FormGroup({
    "params": new FormGroup({
      "_search": new FormControl(null)
    })
  })

  searchConfig: FormStructureConfig = new FormStructureConfig({
    controls:{
      "params":new FormConfig({
        controls:{
          "_search":new FormControlConfig({
            label:"Buscar",
            type: new FieldInputTextOptions(),
            width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
          })
        }
      })
    }
  })
/*
    (fg.controls["creado"] as FormControlExt).set({
      label: "Creado",
      type:new FieldDateOptions({
        format: "dd/MM/yyyy HH:mm"
      })
    });

    (fg.controls["enviado"] as FormControlExt).set({
      label: "Enviado",
      type:new FieldDateOptions({
        format: "dd/MM/yyyy HH:mm"
      })
    });

    (fg.controls["evaluado"] as FormControlExt).set({
      label: "Evaluado",
      type:new FieldDateOptions({
        format: "dd/MM/yyyy HH:mm"
      })
    });


    (fg.controls["modificado"] as FormControlExt).set({
      label: "Modificado",
      type:new FieldDateOptions({
        format: "dd/MM/yyyy HH:mm"
      })
    });

    
    (fg.controls["observaciones"] as FormControlExt).set({
      label: "Observaciones"
    });
    
    // (fg.controls["_delete"] as FormControlExt).set({
    //   type: new FieldHiddenOptions,
    // })*/
    //return fg;
  //}

}

