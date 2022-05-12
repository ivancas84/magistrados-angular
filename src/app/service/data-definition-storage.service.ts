import { Injectable } from '@angular/core';

import { SessionStorageService } from '@service/storage/session-storage.service';


@Injectable({
  providedIn: 'root'
})
export class DataDefinitionStorageService {

  constructor(protected stg: SessionStorageService){ }

  storage(entityName: string, row: { [index: string]: any }): void {
    switch(entityName) {
      case "afiliacion": this.storageAfiliacion(row); break;
      case "cargo": this.storageCargo(row); break;
      case "departamento_judicial": this.storageDepartamentoJudicial(row); break;
      case "file": this.storageFile(row); break;
      case "importe_afiliacion": this.storageImporteAfiliacion(row); break;
      case "importe_tramite_excepcional": this.storageImporteTramiteExcepcional(row); break;
      case "organo": this.storageOrgano(row); break;
      case "persona": this.storagePersona(row); break;
      case "sucursal": this.storageSucursal(row); break;
      case "tipo_documento": this.storageTipoDocumento(row); break;
      case "tramite_excepcional": this.storageTramiteExcepcional(row); break;
      case "viatico": this.storageViatico(row); break;
    }
  }
  storageAfiliacion(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('persona_' in rowCloned)
    && ('cargo_' in rowCloned['persona_'])
    ){
      this.stg.setItem('cargo' + rowCloned['persona_']['cargo_'].id, rowCloned['persona_']['cargo_']);
      delete rowCloned['persona_']['cargo_'];
    }
    if(('persona_' in rowCloned)
    && ('organo_' in rowCloned['persona_'])
    ){
      this.stg.setItem('organo' + rowCloned['persona_']['organo_'].id, rowCloned['persona_']['organo_']);
      delete rowCloned['persona_']['organo_'];
    }
    if(('persona_' in rowCloned)
    && ('departamento_judicial_' in rowCloned['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['persona_']['departamento_judicial_'].id, rowCloned['persona_']['departamento_judicial_']);
      delete rowCloned['persona_']['departamento_judicial_'];
    }
    if(('persona_' in rowCloned)
    && ('departamento_judicial_informado_' in rowCloned['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['persona_']['departamento_judicial_informado_'].id, rowCloned['persona_']['departamento_judicial_informado_']);
      delete rowCloned['persona_']['departamento_judicial_informado_'];
    }
    if(('persona_' in rowCloned)
    && ('tipo_documento_' in rowCloned['persona_'])
    ){
      this.stg.setItem('tipo_documento' + rowCloned['persona_']['tipo_documento_'].id, rowCloned['persona_']['tipo_documento_']);
      delete rowCloned['persona_']['tipo_documento_'];
    }
    if(('persona_' in rowCloned)
    ){
      this.stg.setItem('persona' + rowCloned['persona_'].id, rowCloned['persona_']);
      delete rowCloned['persona_'];
    }
    this.stg.setItem("afiliacion" + rowCloned.id, rowCloned);
  }

  storageCargo(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("cargo" + rowCloned.id, rowCloned);
  }

  storageDepartamentoJudicial(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("departamento_judicial" + rowCloned.id, rowCloned);
  }

  storageFile(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("file" + rowCloned.id, rowCloned);
  }

  storageImporteAfiliacion(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    && ('cargo_' in rowCloned['afiliacion_']['persona_'])
    ){
      this.stg.setItem('cargo' + rowCloned['afiliacion_']['persona_']['cargo_'].id, rowCloned['afiliacion_']['persona_']['cargo_']);
      delete rowCloned['afiliacion_']['persona_']['cargo_'];
    }
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    && ('organo_' in rowCloned['afiliacion_']['persona_'])
    ){
      this.stg.setItem('organo' + rowCloned['afiliacion_']['persona_']['organo_'].id, rowCloned['afiliacion_']['persona_']['organo_']);
      delete rowCloned['afiliacion_']['persona_']['organo_'];
    }
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    && ('departamento_judicial_' in rowCloned['afiliacion_']['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['afiliacion_']['persona_']['departamento_judicial_'].id, rowCloned['afiliacion_']['persona_']['departamento_judicial_']);
      delete rowCloned['afiliacion_']['persona_']['departamento_judicial_'];
    }
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    && ('departamento_judicial_informado_' in rowCloned['afiliacion_']['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['afiliacion_']['persona_']['departamento_judicial_informado_'].id, rowCloned['afiliacion_']['persona_']['departamento_judicial_informado_']);
      delete rowCloned['afiliacion_']['persona_']['departamento_judicial_informado_'];
    }
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    && ('tipo_documento_' in rowCloned['afiliacion_']['persona_'])
    ){
      this.stg.setItem('tipo_documento' + rowCloned['afiliacion_']['persona_']['tipo_documento_'].id, rowCloned['afiliacion_']['persona_']['tipo_documento_']);
      delete rowCloned['afiliacion_']['persona_']['tipo_documento_'];
    }
    if(('afiliacion_' in rowCloned)
    && ('persona_' in rowCloned['afiliacion_'])
    ){
      this.stg.setItem('persona' + rowCloned['afiliacion_']['persona_'].id, rowCloned['afiliacion_']['persona_']);
      delete rowCloned['afiliacion_']['persona_'];
    }
    if(('afiliacion_' in rowCloned)
    ){
      this.stg.setItem('afiliacion' + rowCloned['afiliacion_'].id, rowCloned['afiliacion_']);
      delete rowCloned['afiliacion_'];
    }
    this.stg.setItem("importe_afiliacion" + rowCloned.id, rowCloned);
  }

  storageImporteTramiteExcepcional(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    && ('cargo_' in rowCloned['tramite_excepcional_']['persona_'])
    ){
      this.stg.setItem('cargo' + rowCloned['tramite_excepcional_']['persona_']['cargo_'].id, rowCloned['tramite_excepcional_']['persona_']['cargo_']);
      delete rowCloned['tramite_excepcional_']['persona_']['cargo_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    && ('organo_' in rowCloned['tramite_excepcional_']['persona_'])
    ){
      this.stg.setItem('organo' + rowCloned['tramite_excepcional_']['persona_']['organo_'].id, rowCloned['tramite_excepcional_']['persona_']['organo_']);
      delete rowCloned['tramite_excepcional_']['persona_']['organo_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    && ('departamento_judicial_' in rowCloned['tramite_excepcional_']['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_'].id, rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_']);
      delete rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    && ('departamento_judicial_informado_' in rowCloned['tramite_excepcional_']['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_informado_'].id, rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_informado_']);
      delete rowCloned['tramite_excepcional_']['persona_']['departamento_judicial_informado_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    && ('tipo_documento_' in rowCloned['tramite_excepcional_']['persona_'])
    ){
      this.stg.setItem('tipo_documento' + rowCloned['tramite_excepcional_']['persona_']['tipo_documento_'].id, rowCloned['tramite_excepcional_']['persona_']['tipo_documento_']);
      delete rowCloned['tramite_excepcional_']['persona_']['tipo_documento_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('persona_' in rowCloned['tramite_excepcional_'])
    ){
      this.stg.setItem('persona' + rowCloned['tramite_excepcional_']['persona_'].id, rowCloned['tramite_excepcional_']['persona_']);
      delete rowCloned['tramite_excepcional_']['persona_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    && ('sucursal_' in rowCloned['tramite_excepcional_'])
    ){
      this.stg.setItem('sucursal' + rowCloned['tramite_excepcional_']['sucursal_'].id, rowCloned['tramite_excepcional_']['sucursal_']);
      delete rowCloned['tramite_excepcional_']['sucursal_'];
    }
    if(('tramite_excepcional_' in rowCloned)
    ){
      this.stg.setItem('tramite_excepcional' + rowCloned['tramite_excepcional_'].id, rowCloned['tramite_excepcional_']);
      delete rowCloned['tramite_excepcional_'];
    }
    this.stg.setItem("importe_tramite_excepcional" + rowCloned.id, rowCloned);
  }

  storageOrgano(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("organo" + rowCloned.id, rowCloned);
  }

  storagePersona(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('cargo_' in rowCloned)
    ){
      this.stg.setItem('cargo' + rowCloned['cargo_'].id, rowCloned['cargo_']);
      delete rowCloned['cargo_'];
    }
    if(('organo_' in rowCloned)
    ){
      this.stg.setItem('organo' + rowCloned['organo_'].id, rowCloned['organo_']);
      delete rowCloned['organo_'];
    }
    if(('departamento_judicial_' in rowCloned)
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['departamento_judicial_'].id, rowCloned['departamento_judicial_']);
      delete rowCloned['departamento_judicial_'];
    }
    if(('departamento_judicial_informado_' in rowCloned)
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['departamento_judicial_informado_'].id, rowCloned['departamento_judicial_informado_']);
      delete rowCloned['departamento_judicial_informado_'];
    }
    if(('tipo_documento_' in rowCloned)
    ){
      this.stg.setItem('tipo_documento' + rowCloned['tipo_documento_'].id, rowCloned['tipo_documento_']);
      delete rowCloned['tipo_documento_'];
    }
    this.stg.setItem("persona" + rowCloned.id, rowCloned);
  }

  storageSucursal(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("sucursal" + rowCloned.id, rowCloned);
  }

  storageTipoDocumento(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("tipo_documento" + rowCloned.id, rowCloned);
  }

  storageTramiteExcepcional(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('persona_' in rowCloned)
    && ('cargo_' in rowCloned['persona_'])
    ){
      this.stg.setItem('cargo' + rowCloned['persona_']['cargo_'].id, rowCloned['persona_']['cargo_']);
      delete rowCloned['persona_']['cargo_'];
    }
    if(('persona_' in rowCloned)
    && ('organo_' in rowCloned['persona_'])
    ){
      this.stg.setItem('organo' + rowCloned['persona_']['organo_'].id, rowCloned['persona_']['organo_']);
      delete rowCloned['persona_']['organo_'];
    }
    if(('persona_' in rowCloned)
    && ('departamento_judicial_' in rowCloned['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['persona_']['departamento_judicial_'].id, rowCloned['persona_']['departamento_judicial_']);
      delete rowCloned['persona_']['departamento_judicial_'];
    }
    if(('persona_' in rowCloned)
    && ('departamento_judicial_informado_' in rowCloned['persona_'])
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['persona_']['departamento_judicial_informado_'].id, rowCloned['persona_']['departamento_judicial_informado_']);
      delete rowCloned['persona_']['departamento_judicial_informado_'];
    }
    if(('persona_' in rowCloned)
    && ('tipo_documento_' in rowCloned['persona_'])
    ){
      this.stg.setItem('tipo_documento' + rowCloned['persona_']['tipo_documento_'].id, rowCloned['persona_']['tipo_documento_']);
      delete rowCloned['persona_']['tipo_documento_'];
    }
    if(('persona_' in rowCloned)
    ){
      this.stg.setItem('persona' + rowCloned['persona_'].id, rowCloned['persona_']);
      delete rowCloned['persona_'];
    }
    if(('sucursal_' in rowCloned)
    ){
      this.stg.setItem('sucursal' + rowCloned['sucursal_'].id, rowCloned['sucursal_']);
      delete rowCloned['sucursal_'];
    }
    this.stg.setItem("tramite_excepcional" + rowCloned.id, rowCloned);
  }

  storageViatico(row: { [index: string]: any }): void{
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    if(('organo_' in rowCloned)
    ){
      this.stg.setItem('organo' + rowCloned['organo_'].id, rowCloned['organo_']);
      delete rowCloned['organo_'];
    }
    if(('departamento_judicial_' in rowCloned)
    ){
      this.stg.setItem('departamento_judicial' + rowCloned['departamento_judicial_'].id, rowCloned['departamento_judicial_']);
      delete rowCloned['departamento_judicial_'];
    }
    this.stg.setItem("viatico" + rowCloned.id, rowCloned);
  }

}
