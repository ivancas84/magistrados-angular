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
import { FieldControlOptions, FieldHiddenOptions, FieldInputDateOptions, FieldInputSelectOptions, FieldInputTextOptions } from '@class/field-type-options';
import { FieldWidthOptions } from '@class/field-width-options';

@Component({
  selector: 'app-persona-admin',
  templateUrl: './persona-admin.component.html',
})
export class PersonaAdminComponent extends AdminComponent {

  readonly entityName: string = "persona";

  fieldsViewOptions: FieldViewOptions[] = [
    new FieldViewOptions({
      field:"id",
      label:"Id",
      type: new FieldHiddenOptions(),
    }),

    new FieldViewOptions({
      field:"nombres",
      label:"Nombres",
      type: new FieldInputTextOptions()
    }),

    new FieldViewOptions({
      field:"apellidos",
      label:"Apellidos",
      type: new FieldInputTextOptions()
    }),

    new FieldViewOptions({
      field:"legajo",
      label:"Legajo",
      type: new FieldInputTextOptions({
        uniqueRoute:'persona-admin',
      }),
      control: new FieldControlOptions({
        validators: [Validators.required],
        asyncValidators: [this.validators.unique('legajo', 'persona')],
      }),
      width:new FieldWidthOptions({gtSm:"20%"})
    }),
    
    new FieldViewOptions({
      field:"tipo_documento",
      label:"Tipo Documento",
      type: new FieldInputSelectOptions({entityName: "tipo_documento"}),
      width:new FieldWidthOptions({gtSm:"10%", sm:"15%"})
    }),

    new FieldViewOptions({
      field:"numero_documento",
      label:"Numero Documento",
      type: new FieldInputTextOptions({
        uniqueRoute:'persona-admin',
      }),
      control: new FieldControlOptions({
        asyncValidators: [this.validators.unique('numero_documento', 'persona')],
      }),
      width:new FieldWidthOptions({
        gtSm: "20%",
        sm: "35%",
      })
    }),

    new FieldViewOptions({
      field:"telefono_laboral",
      label:"Telefono Laboral",
      type: new FieldInputTextOptions
    }),

    new FieldViewOptions({
      field:"telefono_particular",
      label:"Telefono Particular",
      type: new FieldInputTextOptions
    }),

    new FieldViewOptions({
      field:"fecha_nacimiento",
      label:"Fecha Nacimiento",
      type: new FieldInputDateOptions
    }),

    new FieldViewOptions({
      field:"email",
      label:"Email",
      type: new FieldInputTextOptions,
      control: new FieldControlOptions({
        validators: [Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\.[a-z]{2,3}")],
      }),
    }),

    new FieldViewOptions({
      field:"tribunal",
      label:"Tribunal",
      type: new FieldInputTextOptions,
      width:new FieldWidthOptions({
        gtSm: "50%",
        //sm: "15%"
      })
    }),

    new FieldViewOptions({
      field:"cargo",
      label:"Cargo",
      type: new FieldInputSelectOptions({
        entityName: "cargo",
      }),
      width: new FieldWidthOptions({
        gtSm: "50%",
      })
    }),

    /*new FieldViewOptions({
      field:"organo",
      label:"Organo",
      type: new FieldInputSelectOptions({
        entityName: "organo",
      }),
      control: new FieldControlOptions({
        validators: [Validators.required],
      }),
      width: new FieldWidthOptions({
        gtSm: "18%",
        sm: "30%"
      })
    }),

    new FieldViewOptions({
      field:"departamento_judicial",
      label:"Departamento Judicial",
      type: new FieldInputSelectOptions({
        entityName: "departamento_judicial",
      })
    }),

    new FieldViewOptions({
      field:"departamento_judicial_informado",
      label:"Departamento Judicial Informado",
      type: new FieldInputSelectOptions({
        entityName: "departamento_judicial",
      }),
      control:new FieldControlOptions({
        disabled:true
      })
    }),*/
  ];
}

