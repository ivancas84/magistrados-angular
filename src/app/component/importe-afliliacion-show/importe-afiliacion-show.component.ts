import { Component } from '@angular/core';
import { Display } from '@class/display';
import { FormArrayConfig, FormGroupConfig } from '@class/reactive-form-config';
import { ControlDateConfig } from '@component/control-date/control-date.component';
import { ControlLabelConfig } from '@component/control-label/control-label.component';
import { ControlValueConfig } from '@component/control-value/control-value.component';
import { FieldWrapRouterLinkConfig } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { InputSelectParamConfig } from '@component/input-select-param/input-select-param.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { TableComponent } from '@component/structure/table.component';
import { switchMap, of, map, Observable } from 'rxjs';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: '../../core/component/structure/table.component.html',
})
export class ImporteAfiliacionShowComponent extends TableComponent {

  override entityName: string = "importe_afiliacion";

  override title: string = "Importes Registro 40"

  override serverSortTranslate = {
    "afi-persona":["afi_per-nombres","afi_per-apellidos"],
    "afi-departamento_judicial":["afi_dj-codigo"],
    "afi-organo":["afi_org-descripcion"]
  }

  override serverSortObligatory = ["afi-persona","afi-departamento_judicial","afi-organo"]
    
  override config: FormArrayConfig = new FormArrayConfig({
      "afi-persona": new FieldWrapRouterLinkConfig({
        label:"Persona",
        config: new ControlLabelConfig({
          entityName:"persona"
        }),
        path: "persona-admin", 
        params:{id:"{{afi-persona}})"}
      }),
      "afi_per-legajo": new ControlValueConfig,
      "afi-departamento_judicial": new ControlLabelConfig,
      "afi-organo": new ControlLabelConfig,
      "afi-codigo": new ControlValueConfig({
        label:"Cód",
      }),
      "periodo": new ControlDateConfig({
        format: "dd/MM/yyyy"
      }),
      "valor": new ControlValueConfig,
    }
  )

  override searchConfig = new FormGroupConfig({
        "periodo.ym": new InputYmConfig({
          label:"Período",
        }),
        "afi-departamento_judicial": new InputSelectConfig,
        "afi-organo": new InputSelectConfig,
        "afi-codigo": new InputSelectParamConfig({
          options:[161,162],
        }),
  })

  override initDisplay() {
    var display = new Display();
    display.setSize(0);
    display.setParamsByQueryParams(this.params);
    this.display$.next(display)
  }


  override initData(): Observable<any>{
    
    return this.dd.all(this.entityName, this.display$.value).pipe(
      map(
        data => {
          data.forEach((element: { [x: string]: any; }) => element["afi-persona"] = element["persona"])

          console.log(data)
          return data
        }
      )
    )
    return this.dd.all(this.entityName, this.display$.value).pipe(
      switchMap(
        ids => this.dd.getAll(this.entityName, ids)
      )
    )
  }

  override loadDisplay(){
    /**
     * Se define un load independiente para el display, es util para reasignar
     * valores directamente al display y reinicializar por ejemplo al limpiar
     * o resetear el formulario
     */
    this.loadDisplay$ = this.display$.pipe(
      switchMap(
        () => {
          this.load = false
          return this.initLength();
        }
      ),
      switchMap(
        () =>   (this.length === 0) ? of([]) : this.initData()
      ),
      map(
        data => {
          console.log(data)
          this.setData(data)
          return this.load = true;
        }
      ),
    )
  }
 
}

