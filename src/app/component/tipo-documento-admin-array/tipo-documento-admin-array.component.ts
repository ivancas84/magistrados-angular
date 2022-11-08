import { ChangeDetectorRef, Component } from '@angular/core';
import { FormArrayConfig } from '@class/reactive-form-config';
import { RequiredValidatorMsg, UniqueValidatorMsg } from '@class/validator-msg';
import { TipoDocumentoFormGroupFactory } from './tipo-documento-form-group-factory.class';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { Location } from '@angular/common';
import { TableComponent } from '@component/structure/table.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { DdAsyncValidatorsService } from '@service/validators/dd-async-validators.service';


@Component({
  selector: 'app-tipo-documento-admin-array',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class TipoDocumentoAdminArrayComponent extends TableComponent {
  override entityName: string = "tipo_documento"

  override config: FormArrayConfig = new FormArrayConfig({
      "descripcion": new InputTextConfig({
        label:"Descripción",
        validatorMsgs: [new RequiredValidatorMsg, new UniqueValidatorMsg],
        showLabel:false
      }),
  })
  
  override optFooter: AbstractControlViewOption[] = [
    { config: new EventButtonConfig({
        text: "Aceptar", 
        action: "submit",
        color: "primary",
        fieldEvent: this.optField
      }),
    },
    {
      config: new EventIconConfig({
        icon: "add", //texto del boton
        action: "add", //accion del evento a realizar
        color: "primary",
        fieldEvent: this.optField
      })
    },
    {
      config: new EventIconConfig({
        icon: "arrow_back", //texto del boton
        action: "back", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      })
    },
    {
      config: new EventIconConfig({
        icon: "autorenew", //texto del boton
        action: "reset", //accion del evento a realizar
        color: "accent",
        fieldEvent: this.optField
      })
    },
  ]

  override optColumn = [
    new EventIconConfig({
        action:"remove",
        color: "accent",
        fieldEvent:this.optField,
        icon:"delete"
    }),
  ]

  constructor(
    protected override dd: DataDefinitionToolService, 
    protected override storage: SessionStorageService,
    protected override dialog: MatDialog,
    protected override snackBar: MatSnackBar,
    protected override router: Router, 
    protected override route: ActivatedRoute, 
    protected override location: Location, 
    protected override cd: ChangeDetectorRef,
    protected validators: DdAsyncValidatorsService
  ) {
    super(dd, storage, dialog, snackBar, router, route, location, cd)
  }

  override ngOnInit(){
    this.config.initAdmin()
    this.config.factory = new TipoDocumentoFormGroupFactory(this.config, this.validators),  
    super.ngOnInit()
  }


  
}

