import { DataDefinition } from '../../core/class/data-definition';

export class _PersonaDataDefinition extends DataDefinition {
  entity: string = 'persona';

  storage(row: { [index: string]: any }){
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

}
