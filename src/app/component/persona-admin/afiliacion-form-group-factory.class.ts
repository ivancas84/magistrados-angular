import { FormControl, FormGroup } from "@angular/forms";
import { FieldHiddenOptions, TypeLabelOptions, FieldDateOptions } from "@class/field-type-options";
import { RouterLinkOptions } from "@class/field-view-aux-options";
import { FormGroupFactory, FormGroupExt, FormControlExt } from "@class/reactive-form-ext";

export class AfiliacionFormGroupFactory implements FormGroupFactory{

  
  formGroup(): FormGroup {
    var fg = new FormGroup({
      "id":new FormControl(),
      "motivo":new FormControl(),
      "estado":new FormControl(),
      "codigo":new FormControl(),
      "departamento_judicial":new FormControl(),
      "organo":new FormControl(),
      "creado":new FormControl(),
      "enviado":new FormControl(),
      "evaluado":new FormControl(),
      "modificado":new FormControl(),
      "observaciones":new FormControl(),
      //"_delete":new FormControlExt(),
    });


    fg.disable();
    return fg
    /*  
    (fg.controls["id"] as FormControlExt).set({
      type: new FieldHiddenOptions
    });

    (fg.controls["motivo"] as FormControlExt).set({
      label: "Motivo",
      aux: new RouterLinkOptions({path:"afiliacion-admin"})
    });

    (fg.controls["estado"] as FormControlExt).set({
      label: "Estado"
    });

    (fg.controls["codigo"] as FormControlExt).set({
      label: "Cód"
    });

    (fg.controls["departamento_judicial"] as FormControlExt).set({
      label: "Departamento",
      type:new TypeLabelOptions({entityName:"departamento_judicial"})
    });

    (fg.controls["organo"] as FormControlExt).set({
      label: "Organo",
      type:new TypeLabelOptions({entityName:"organo"})
    });

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
  }

  
}