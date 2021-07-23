import { Injectable } from '@angular/core';

import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { Parser } from '@class/parser';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class _DataDefinitionLabelService {

  constructor(protected dd: DataDefinitionService){ }

  label(entityName: string, id: string): Observable<string> {
    switch(entityName) {
      case "afiliacion": { return this.labelAfiliacion(id); }
      case "cargo": { return this.labelCargo(id); }
      case "departamento_judicial": { return this.labelDepartamentoJudicial(id); }
      case "file": { return this.labelFile(id); }
      case "importe_afiliacion": { return this.labelImporteAfiliacion(id); }
      case "importe_tramite_excepcional": { return this.labelImporteTramiteExcepcional(id); }
      case "log": { return this.labelLog(id); }
      case "organo": { return this.labelOrgano(id); }
      case "persona": { return this.labelPersona(id); }
      case "sucursal": { return this.labelSucursal(id); }
      case "tipo_documento": { return this.labelTipoDocumento(id); }
      case "tramite_excepcional": { return this.labelTramiteExcepcional(id); }
      case "viatico": { return this.labelViatico(id); }
    }
  }
  labelAfiliacionRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelCargoRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }

  labelDepartamentoJudicialRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["codigo"]) ret = ret.trim() + " " + row["codigo"];

    if (row["nombre"]) ret = ret.trim() + " " + row["nombre"];

    return ret.trim();
  }

  labelFileRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelImporteAfiliacionRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelImporteTramiteExcepcionalRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelLogRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelOrganoRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }

  labelPersonaRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["nombres"]) ret = ret.trim() + " " + row["nombres"];

    if (row["apellidos"]) ret = ret.trim() + " " + row["apellidos"];

    if (row["legajo"]) ret = ret.trim() + " " + row["legajo"];

    return ret.trim();
  }

  labelSucursalRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }

  labelTipoDocumentoRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["descripcion"]) ret = ret.trim() + " " + row["descripcion"];

    return ret.trim();
  }

  labelTramiteExcepcionalRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelViaticoRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["id"]) ret = ret.trim() + " " + row["id"];

    return ret.trim();
  }

  labelAfiliacion(id: string): Observable<any> {
    return this.dd.get("afiliacion", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelAfiliacionRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelCargo(id: string): Observable<any> {
    return this.dd.get("cargo", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelCargoRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelDepartamentoJudicial(id: string): Observable<any> {
    return this.dd.get("departamento_judicial", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelDepartamentoJudicialRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelFile(id: string): Observable<any> {
    return this.dd.get("file", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelFileRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelImporteAfiliacion(id: string): Observable<any> {
    return this.dd.get("importe_afiliacion", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelImporteAfiliacionRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelImporteTramiteExcepcional(id: string): Observable<any> {
    return this.dd.get("importe_tramite_excepcional", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelImporteTramiteExcepcionalRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelLog(id: string): Observable<any> {
    return this.dd.get("log", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelLogRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelOrgano(id: string): Observable<any> {
    return this.dd.get("organo", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelOrganoRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelPersona(id: string): Observable<any> {
    return this.dd.get("persona", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelPersonaRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelSucursal(id: string): Observable<any> {
    return this.dd.get("sucursal", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelSucursalRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelTipoDocumento(id: string): Observable<any> {
    return this.dd.get("tipo_documento", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelTipoDocumentoRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelTramiteExcepcional(id: string): Observable<any> {
    return this.dd.get("tramite_excepcional", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelTramiteExcepcionalRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

  labelViatico(id: string): Observable<any> {
    return this.dd.get("viatico", id).pipe(
      switchMap(
        row => {
          if(!row) return of(null);
          return combineLatest([
            of(this.labelViaticoRow(row)),
          ])
        }
      ),
      map(
        response => { return (!response)? null : response.join(" "); }
      )
    );
  }

}
