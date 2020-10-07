import { Injectable } from '@angular/core';

import { SessionStorageService } from '../core/service/storage/session-storage.service';
import { ParserService } from '../core/service/parser/parser.service';
import { DataDefinition } from '../core/class/data-definition';

import { AfiliacionDataDefinition } from '../class/data-definition/afiliacion-data-definition';
import { CargoDataDefinition } from '../class/data-definition/cargo-data-definition';
import { DepartamentoJudicialDataDefinition } from '../class/data-definition/departamento-judicial-data-definition';
import { FileDataDefinition } from '../class/data-definition/file-data-definition';
import { OrganoDataDefinition } from '../class/data-definition/organo-data-definition';
import { PersonaDataDefinition } from '../class/data-definition/persona-data-definition';
import { TipoDocumentoDataDefinition } from '../class/data-definition/tipo-documento-data-definition';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLoaderService {

  constructor(protected stg: SessionStorageService, protected parser: ParserService){ }

  get(name: string): DataDefinition {
    switch(name) {
      case "afiliacion": { return new AfiliacionDataDefinition(this.stg, this.parser); }
      case "cargo": { return new CargoDataDefinition(this.stg, this.parser); }
      case "departamento_judicial": { return new DepartamentoJudicialDataDefinition(this.stg, this.parser); }
      case "file": { return new FileDataDefinition(this.stg, this.parser); }
      case "organo": { return new OrganoDataDefinition(this.stg, this.parser); }
      case "persona": { return new PersonaDataDefinition(this.stg, this.parser); }
      case "tipo_documento": { return new TipoDocumentoDataDefinition(this.stg, this.parser); }
    }
  }
}
