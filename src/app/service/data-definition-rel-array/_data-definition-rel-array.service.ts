import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { isEmptyObject } from '@function/is-empty-object.function';


@Injectable({
  providedIn: 'root'
})
export class _DataDefinitionRelArrayService { //2
  /**
   * Define un array de relaciones, utilizando metodos que consultan el storage,
   * 
   * La estructura resultante, puede ser utilizada directamente en una tabla de visualizacion.
   * 
   * Gracias al storage y la identificacion de fields, 
   * reduce los accesos al servidor y facilita el ordenamiento
   * 
   * La identificacion de fields es distinta de la que hace el servidor.
   * En el servidor habitualmente se utiliza '-' para las consultas 
   * y '_' representar el resultado, 
   */

  constructor(protected dd: DataDefinitionToolService){ }

    filterFields(fields, prefix) {
      var f = {}
      for(var key in fields){
        if(fields.hasOwnProperty(key)){
          if(key.includes(prefix)) f[key] = fields[key];
        }
      }
      return f;
    }

  get(entityName: string, id:string, fields: { [index: string]: any }): Observable<any> {
      /**
       * @param fields Ejemplo de estructura, para entityName = 'alumno'
       * {'per-nombres':'nombres', 'per-numero_documento':'numero_documento', 'per_dom-calle':'calle'}
       */
    switch(entityName) {
      case "afiliacion": { return this.afiliacionGet(id, fields); }
      case "cargo": { return this.cargoGet(id, fields); }
      case "departamento_judicial": { return this.departamentoJudicialGet(id, fields); }
      case "file": { return this.fileGet(id, fields); }
      case "importe_afiliacion": { return this.importeAfiliacionGet(id, fields); }
      case "importe_tramite_excepcional": { return this.importeTramiteExcepcionalGet(id, fields); }
      case "organo": { return this.organoGet(id, fields); }
      case "persona": { return this.personaGet(id, fields); }
      case "sucursal": { return this.sucursalGet(id, fields); }
      case "tipo_documento": { return this.tipoDocumentoGet(id, fields); }
      case "tramite_excepcional": { return this.tramiteExcepcionalGet(id, fields); }
      case "viatico": { return this.viaticoGet(id, fields); }
    }
  }
  getAll(entityName: string, ids:string[], fields: { [index: string]: any }): Observable<any> {
      /**
       * @param fields Ejemplo de estructura, para entityName = 'alumno'
       * {'per-nombres':'nombres', 'per-numero_documento':'numero_documento', 'per_dom-calle':'calle'}
       */
    switch(entityName) {
      case "afiliacion": { return this.afiliacionGetAll(ids, fields); }
      case "cargo": { return this.cargoGetAll(ids, fields); }
      case "departamento_judicial": { return this.departamentoJudicialGetAll(ids, fields); }
      case "file": { return this.fileGetAll(ids, fields); }
      case "importe_afiliacion": { return this.importeAfiliacionGetAll(ids, fields); }
      case "importe_tramite_excepcional": { return this.importeTramiteExcepcionalGetAll(ids, fields); }
      case "organo": { return this.organoGetAll(ids, fields); }
      case "persona": { return this.personaGetAll(ids, fields); }
      case "sucursal": { return this.sucursalGetAll(ids, fields); }
      case "tipo_documento": { return this.tipoDocumentoGetAll(ids, fields); }
      case "tramite_excepcional": { return this.tramiteExcepcionalGetAll(ids, fields); }
      case "viatico": { return this.viaticoGetAll(ids, fields); }
    }
  }
  afiliacionGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("afiliacion", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  cargoGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("cargo", ids)  }
    
  departamentoJudicialGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("departamento_judicial", ids)  }
    
  fileGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("file", ids)  }
    
  importeAfiliacionGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("importe_afiliacion", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afiliacion', 'afiliacion', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi-persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi_per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi_per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi_per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi_per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'afi_per-tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  importeTramiteExcepcionalGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("importe_tramite_excepcional", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'tramite_excepcional', 'tramite_excepcional', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te-persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te_per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te_per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te_per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te_per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te_per-tipo_documento', 'tipo_documento', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_suc-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'te-sucursal', 'sucursal', f)
        }
      ),
    )
  }
    
  organoGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("organo", ids)  }
    
  personaGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("persona", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  sucursalGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("sucursal", ids)  }
    
  tipoDocumentoGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("tipo_documento", ids)  }
    
  tramiteExcepcionalGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("tramite_excepcional", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'per-tipo_documento', 'tipo_documento', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'suc-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'sucursal', 'sucursal', f)
        }
      ),
    )
  }
    
  viaticoGetAll(ids: string[], fields: { [index: string]: any }): Observable<any> {
    return this.dd.getAll("viatico", ids).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getAllColumnData(data, 'departamento_judicial', 'departamento_judicial', f)
        }
      ),
    )
  }
    
  afiliacionGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("afiliacion", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  cargoGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("cargo", id)  }
    
  departamentoJudicialGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("departamento_judicial", id)  }
    
  fileGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("file", id)  }
    
  importeAfiliacionGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("importe_afiliacion", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afiliacion', 'afiliacion', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi-persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi_per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi_per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi_per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi_per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'afi_per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'afi_per-tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  importeTramiteExcepcionalGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("importe_tramite_excepcional", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'tramite_excepcional', 'tramite_excepcional', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te-persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te_per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te_per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te_per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te_per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te_per-tipo_documento', 'tipo_documento', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'te_suc-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'te-sucursal', 'sucursal', f)
        }
      ),
    )
  }
    
  organoGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("organo", id)  }
    
  personaGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("persona", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'tipo_documento', 'tipo_documento', f)
        }
      ),
    )
  }
    
  sucursalGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("sucursal", id)  }
    
  tipoDocumentoGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("tipo_documento", id)  }
    
  tramiteExcepcionalGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("tramite_excepcional", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'persona', 'persona', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_car-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-cargo', 'cargo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-departamento_judicial', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_dji-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-departamento_judicial_informado', 'departamento_judicial', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'per_td-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'per-tipo_documento', 'tipo_documento', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'suc-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'sucursal', 'sucursal', f)
        }
      ),
    )
  }
    
  viaticoGet(id: string, fields: { [index: string]: any }): Observable<any> {
    return this.dd.get("viatico", id).pipe(
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'org-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'organo', 'organo', f)
        }
      ),
      switchMap(
        (data:{ [index: string]: any; }[]) => {
          var f = this.filterFields(fields, 'dj-');
          return (isEmptyObject(f)) ? of(data) : this.dd.getColumnData(data, 'departamento_judicial', 'departamento_judicial', f)
        }
      ),
    )
  }
    
}
