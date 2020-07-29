import { DataDefinition } from '../../core/class/data-definition';

export class _AfiliacionDataDefinition extends DataDefinition {
  entity: string = 'afiliacion';

  storage(row: { [index: string]: any }){
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

}
