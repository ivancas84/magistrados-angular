import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, PatternValidator, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
import { StructureComponent } from "@component/structure/structure.component";
import { DataDefinitionToolService } from "@service/data-definition/data-definition-tool.service";
import { SessionStorageService } from "@service/storage/session-storage.service";
import { DdAsyncValidatorsService } from "@service/validators/dd-async-validators.service";
import { Location } from '@angular/common';
import { FormArrayConfig, FormControlConfig, FormGroupConfig } from "@class/reactive-form-config";
import { RequiredValidatorMsg, UniqueValidatorMsg } from "@class/validator-msg";
import { InputDateConfig } from "@component/input-date/input-date.component";
import { InputTextConfig } from "@component/input-text/input-text.component";
import { InputSelectConfig } from "@component/input-select/input-select.component";
import { FieldWidthOptions } from "@class/field-width-options";
import { ControlValueConfig } from "@component/control-value/control-value.component";
import { ControlLabelConfig } from "@component/control-label/control-label.component";
import { ControlDateConfig } from "@component/control-date/control-date.component";
import { combineLatest, map, Observable, of, switchMap } from "rxjs";
import { isEmptyObject } from "@function/is-empty-object.function";
import { Display } from "@class/display";
import { AbstractControlViewOption } from "@component/abstract-control-view/abstract-control-view.component";
import { EventButtonConfig } from "@component/event-button/event-button.component";
import { DialogAlertComponent } from "@component/dialog-alert/dialog-alert.component";
import { EventIconConfig } from "@component/event-icon/event-icon.component";
import { RouteIconConfig } from "@component/route-icon/route-icon.component";

@Component({
    selector: 'app-persona-admin',
    templateUrl: './persona-admin.component.html',
})
export class PersonaAdminComponent extends StructureComponent implements OnInit{

    override control: FormGroup = new FormGroup({})

    controlPersona: FormGroup =  new FormGroup({
        "legajo":new FormControl(null,{
            validators: [Validators.required], 
            asyncValidators:[this.validators.unique('legajo', 'persona')]
        }),
        "numero_documento":new FormControl(null,{
            validators:[Validators.required],
            asyncValidators:[this.validators.unique("numero_documento", "persona")]
        }),
    })

    controlAfiliacion_: FormArray = new FormArray([])
    controlTramiteExcepcional_: FormArray = new FormArray([])

    configPersona: FormGroupConfig = new FormGroupConfig({
        nombres: new InputTextConfig,
        apellidos: new InputTextConfig,
        legajo: new InputTextConfig({
            validatorMsgs:[new RequiredValidatorMsg(), new UniqueValidatorMsg()],
        }),
        tipo_documento: new InputSelectConfig({
            width:new FieldWidthOptions({gtSm:"10%", sm:"15%"})
        }),
        numero_documento: new InputTextConfig({
          validatorMsgs:[new RequiredValidatorMsg(), new UniqueValidatorMsg()],
          width:new FieldWidthOptions({
            gtSm: "15%",
            sm: "35%",
          }),
        }),
        telefono_laboral: new InputTextConfig,
        telefono_particular: new InputTextConfig,
        fecha_nacimiento: new InputDateConfig,
        email: new InputTextConfig({
            validatorMsgs: [
                new PatternValidator,
            ],
        }),
        tribunal: new InputTextConfig({
            width:new FieldWidthOptions({
                gtSm: "50%",
                //sm: "15%"
            })  
        }),
        cargo: new InputSelectConfig({
            width:new FieldWidthOptions({
              gtSm: "50%",
              //sm: "15%"
            })  
        }),
    })

    configAfiliacion_: FormArrayConfig = new FormArrayConfig({
        persona: new FormControlConfig,
        motivo: new ControlValueConfig,
        estado: new ControlValueConfig,
        codigo: new ControlValueConfig,
        departamento_judicial: new ControlLabelConfig,
        organo: new ControlLabelConfig,
        creado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        enviado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        evaluado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        modificado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        observaciones: new ControlValueConfig
    })

    configTramiteExcepcional_: FormArrayConfig = new FormArrayConfig({
        persona: new FormControlConfig,
        motivo: new ControlValueConfig,
        estado: new ControlValueConfig,
        codigo: new ControlValueConfig,
        departamento_judicial: new ControlLabelConfig,
        organo: new ControlLabelConfig,
        creado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        enviado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        evaluado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        modificado: new ControlDateConfig({
            format: "dd/MM/yyyy HH:mm"
        }),
        observaciones: new ControlValueConfig,
        desde: new ControlDateConfig,
        hasta: new ControlDateConfig,
        monto: new ControlValueConfig,        
    })

    optFooterPersona: AbstractControlViewOption[] = [
      {
        config: new EventButtonConfig({
          text: "Guardar Datos Persona", //texto del boton
          action: "submit_persona", //accion del evento a realizar
          color: "primary",
          fieldEvent: this.optField
        }),
      }
    ];

    optFooterAfiliacion_: AbstractControlViewOption[] = [
      {
        config: new RouteIconConfig({
          icon: "add",
          params:{persona:"{{id}}"},
          routerLink: "afiliacion-admin",
          title: "Agregar Registro 40",
          color:"accent",
        }),
        control: this.controlPersona
      },
    ];

    optFooterTramiteExcepcional_: AbstractControlViewOption[] = [
      {
        config: new RouteIconConfig({
          icon: "add",
          params:{persona:"{{id}}"},
          routerLink: "tramite-excepcional-admin",
          title: "Agregar Registro 40",
          color:"accent",
        }),
        control: this.controlPersona
      },
    ];

    optColumnAfiliacion_: FormControlConfig[] = [
      new RouteIconConfig({
        params:{id:"{{id}}"},
        routerLink: "afiliacion-admin",
        color: "accent",
        icon:"edit"
      })
    ]; //columna opciones para todas las tablas
  
    
    constructor(
        protected override dialog: MatDialog,
        protected override storage: SessionStorageService,
        protected override dd: DataDefinitionToolService, 
        protected override snackBar: MatSnackBar,
        protected override router: Router, 
        protected override location: Location, 
        protected override route: ActivatedRoute, 
        protected validators: DdAsyncValidatorsService,
    ) { 
    super(dialog,storage,dd,snackBar,router,location,route)
    }

      
    override ngOnInit(){
        this.configPersona.initAdmin()
        this.configPersona.initControl(this.controlPersona)
        this.configAfiliacion_.initFactory()
        this.configAfiliacion_.initAdmin()
        this.configTramiteExcepcional_.initFactory()
        this.configTramiteExcepcional_.initAdmin()
    
        this.control.addControl("persona",this.controlPersona)
        this.control.addControl("afiliacion/persona",this.controlAfiliacion_)
        this.control.addControl("tramite_excepcional/persona",this.controlTramiteExcepcional_)
    
        super.ngOnInit()
    }

    loadDisplay(): void {
        this.loadDisplay$ = this.display$.pipe(
          switchMap(
            () => {
              return this.initStorage();
            }
          ),
          map(
            (data: any) => { 
              this.controlPersona.patchValue(this.configPersona.defaultValues())
              this.controlAfiliacion_.clear();
              for(var i = 0; i <data["afiliacion/persona"].length; i++) this.controlAfiliacion_.push(this.configAfiliacion_.factory!.formGroup());
    
              this.controlTramiteExcepcional_.clear();
              for(var i = 0; i <data["tramite_excepcional/persona"].length; i++) this.controlTramiteExcepcional_.push(this.configTramiteExcepcional_.factory!.formGroup());
              
              this.control.patchValue(data)
              return true;
            }
          ),
        )
    }

    override initData(): Observable<any> {
        var data = {
          "persona":{}, 
          "afiliacion/persona":[], 
          "tramite_excepcional/persona":[], 
        }
        if(isEmptyObject(this.params)) return of(data)
    
        return this.dd.unique("persona", this.params).pipe(
          switchMap(
            (d: any) => {
              if(isEmptyObject(d)) return of(data) 
              data["persona"] = d
              return this.initMultiple(data)
            }
          ),
        )
    }

    initMultiple(data: { [x: string]: any }): Observable<any> {
        var display = new Display()
        display.setParams({"persona":data["persona"]["id"]})
    
        return combineLatest([
          this.dd.all("afiliacion", display),
          this.dd.all("tramite_excepcional", display),
        ]).pipe(
          map(
            (response: any) => {
              var afiliacion_ = response[0];
              var tramite_excepcional_ = response[1];
    
              if(afiliacion_.length) data["afiliacion/persona"] = afiliacion_ 
              if(tramite_excepcional_.length) data["tramite_excepcional/persona"] = tramite_excepcional_
    
              return data
            }
          )
        )
    }

    override initDisplay() {
        /**
         * Inicializar propiedad display$
         * 
         * Por defecto se inicializa con la propiedad params
         */
        var display = new Display();
        display.setSize(100); //se asigna size por defecto por las dudas
        display.setParamsByQueryParams(this.params);
        this.display$.next(display)
    }
    
    getStorageValues() {
        return this.control.getRawValue()
    }

    override switchOptField(data: { action: string; [x: string]: any; }): void {
      switch(data.action){
       
        case "submit_persona":
          this.isSubmitted = true;
          if (!this.control.valid) {
            this.cancelSubmit();
          } else {
            this.submitPersona();
          } 
        break;

        default: super.switchOptField(data)
      }
    }

    protected submitPersona() {
      var s = this.dd._post("persist", "persona", this.controlPersona.value).subscribe({
        next: (response: any) => {
          this.response = response
          this.submitted()        
        },
        error: (error: any) => { 
          this.dialog.open(DialogAlertComponent, {
            data: {title: "Error", message: error.error}
          });
          this.isSubmitted = false;
        }
      });
      this.subscriptions.add(s);
    }
}