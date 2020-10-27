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
      case "organo": this.storageOrgano(row); break;
      case "persona": this.storagePersona(row); break;
      case "tipo_documento": this.storageTipoDocumento(row); break;
      case "tramite_excepcional": this.storageTramiteExcepcional(row); break;
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
    this.stg.setItem("tramite_excepcional" + rowCloned.id, rowCloned);
  }

}
