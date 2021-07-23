import { Component } from '@angular/core';
import { FieldViewOptions } from '@class/field-view-options';
import { TypeLabelOptions, FieldInputSelectCheckboxOptions, FieldInputSelectParamOptions, FieldInputSelectOptions, FieldDateOptions, FieldInputYearMonthOptions, FieldControlOptions } from '@class/field-type-options';
import { RouterLinkOptions } from '@class/field-view-aux-options';
import { FieldWidthOptions } from '@class/field-width-options';
import { ShowRelDynamicComponent } from '@component/show/show-rel-dynamic.component';
import { YearMonthValidatorOpt } from '@class/validator-opt';
import { TableDynamicOptions } from '@class/table-dynamic-options';

@Component({
  selector: 'app-tramite-excepcional-show2',
  templateUrl: '../../core/component/show/show-dynamic.component.html',
})
export class TramiteExcepcionalShow2Component extends ShowRelDynamicComponent {

  readonly entityName: string = "tramite_excepcional";

  tableOptions = new TableDynamicOptions({
    title: "Trámites Excepcionales",

    serverSortTranslate:{
      "persona":["per-nombres","per-apellidos"],
      "departamento_judicial":["per_dj-departamento_judicial"],
      "organo":["org-descripcion"]
    },

    serverSortObligatory:["persona","departamento_judicial","organo"],

    fieldsViewOptions: [
      new FieldViewOptions({
        field:"persona",
        label:"Persona",
        type:new TypeLabelOptions({entityName: "persona"}),
        aux:new RouterLinkOptions({path: "persona-admin", params:{id:"{{persona}})"}}), 
      }),
      new FieldViewOptions({
        field:"per-legajo",
        label:"Legajo",
      }),
      new FieldViewOptions({
        field:"codigo",
        label:"Codigo",
      }),
      
      new FieldViewOptions({
        field:"departamento_judicial",
        label:"Departamento Judicial",
        type:new TypeLabelOptions({entityName: "departamento_judicial"}),
      }),
      new FieldViewOptions({
        field:"desde",
        label:"Desde",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      new FieldViewOptions({
        field:"hasta",
        label:"Hasta",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
  
      new FieldViewOptions({
        field:"motivo",
        label:"Motivo",
      }),
      new FieldViewOptions({
        field:"estado",
        label:"Estado",
      }),
      new FieldViewOptions({
        field:"creado",
        label:"Creado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      new FieldViewOptions({
        field:"enviado",
        label:"Enviado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      new FieldViewOptions({
        field:"evaluado",
        label:"Evaluado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      new FieldViewOptions({
        field:"modificado",
        label:"Modificado",
        type:new FieldDateOptions({format: "MM/yyyy"})
      }),
      new FieldViewOptions({
        field:"organo",
        label:"Organo",
        type:new TypeLabelOptions({entityName: "organo"}),
      }),
    ],
    
  })

  fieldsViewOptionsSp: FieldViewOptions[] = [
    /*new FieldViewOptions({
      field:"search",
      label:"Buscar",
      type: new FieldInputTextOptions(),
      width: new FieldWidthOptions({sm:'100%',gtSm:'100%'}),
    }),*/
    new FieldViewOptions({
      field:"motivo",
      label:"Motivo",
      type: new FieldInputSelectParamOptions({options:['Alta','Baja','Pendiente']}),
      width: new FieldWidthOptions({gtSm:'33%'}),
    }),
    new FieldViewOptions({
      field:"estado",
      label:"Estado",
      type: new FieldInputSelectParamOptions({options:['Creado','Enviado','Aprobado','Rechazado']}),
      width: new FieldWidthOptions({gtSm:'33%'}),
    }),
    new FieldViewOptions({
      field:"modificado.is_set",
      label:"Está modificado?",
      type: new FieldInputSelectCheckboxOptions(),
      width: new FieldWidthOptions({gtSm:'34%'}),
    }),
    new FieldViewOptions({
      field:"departamento_judicial",
      label:"Departamento Judicial",
      type: new FieldInputSelectOptions({entityName:'departamento_judicial'}),
    }),
   
    new FieldViewOptions({
      field:"departamento_judicial_informado",
      label:"Departamento Judicial Informado",
      type: new FieldInputSelectOptions({entityName:'departamento_judicial'}),
    }),
    new FieldViewOptions({
      field:"organo",
      label:"Organo",
      type: new FieldInputSelectOptions({entityName:'organo'}),
    }),
    new FieldViewOptions({
      field:"per-cargo",
      label:"Cargo",
      type: new FieldInputSelectOptions({entityName:"cargo"}),
    }),
    new FieldViewOptions({
      field:"creado.ym",
      label:"Creado",
      type: new FieldInputYearMonthOptions(),
      control:new FieldControlOptions({
        validatorOpts:[new YearMonthValidatorOpt()]
      })
    }),
    new FieldViewOptions({
      field:"enviado.ym",
      label:"Enviado",
      type: new FieldInputYearMonthOptions(),
      control:new FieldControlOptions({
        validatorOpts:[new YearMonthValidatorOpt()]
      })
    }),
    new FieldViewOptions({
      field:"evaluado.ym",
      label:"Evaluado",
      type: new FieldInputYearMonthOptions(),
      control:new FieldControlOptions({
        validatorOpts:[new YearMonthValidatorOpt()]
      })
    }),
    new FieldViewOptions({
      field:"modificado.ym",
      label:"Modificado",
      type: new FieldInputYearMonthOptions(),
      control:new FieldControlOptions({
        validatorOpts:[new YearMonthValidatorOpt()]
      })
    }),
  ];  





}

