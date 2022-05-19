import { Component } from '@angular/core';
import { FormArrayConfig } from '@class/reactive-form-config';
import { DateValidatorMsg, PatternValidatorMsg, RequiredValidatorMsg } from '@class/validator-msg';
import { InputTextConfig } from '@component/input-text/input-text.component';
import { AbstractControlViewOption } from '@component/abstract-control-view/abstract-control-view.component';
import { EventButtonConfig } from '@component/event-button/event-button.component';
import { EventIconConfig } from '@component/event-icon/event-icon.component';
import { ConfiguracionValorFormGroupFactory } from './configuracion-valor-form-group-factory.class';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { Display } from '@class/display';
import { TableComponent } from '@component/structure/table.component';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataDefinitionFkAllService } from '@service/data-definition/data-definition-fk-all.service';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { DdAsyncValidatorsService } from '@service/validators/dd-async-validators.service';


@Component({
  selector: 'app-configuracion-valor-admin-array',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ConfiguracionValorAdminArrayComponent extends TableComponent {
  override entityName: string = "configuracion_valor"

  constructor(
    protected override dd: DataDefinitionToolService, 
    protected override route: ActivatedRoute, 
    protected override dialog: MatDialog,
    protected override storage: SessionStorageService,
    protected override router: Router, 
    protected override snackBar: MatSnackBar,
    protected override location: Location, 
    protected override ddrf: DataDefinitionFkAllService, //@deprecated?
    protected validators: DdAsyncValidatorsService
  ) {
    super(dd, route, dialog, storage, router, snackBar, location, ddrf)
  }
  
  override config: FormArrayConfig = new FormArrayConfig({
    nombre: new InputSelectParamConfig({
      validatorMsgs: [new RequiredValidatorMsg],
      showLabel:false,
      options:["FAM","Cuota Asociativa"],
      required: true,
    }),
    desde: new InputYmConfig({
      validatorMsgs: [new RequiredValidatorMsg, new DateValidatorMsg],
      showLabel:false,
      required: true,
    }),
    valor: new InputTextConfig({
      validatorMsgs: [new RequiredValidatorMsg, new PatternValidatorMsg],
      required: true,
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

  override ngOnInit(){
    this.config.factory = new ConfiguracionValorFormGroupFactory(this.config, this.validators);
    this.config.initAdmin()
    super.ngOnInit()
    
  }


  override initDisplay() {
    var display = new Display();
    display.setSize(100);
    display.setParamsByQueryParams(this.params);
    display.setOrder({desde:"desc"})
    this.display$.next(display)
  }
  
}

