import { DataDefinition } from '../../core/class/data-definition';

export class _DepartamentoJudicialDataDefinition extends DataDefinition {
  entity: string = 'departamento_judicial';

  storage(row: { [index: string]: any }){
    if(!row) return;
    var rowCloned = JSON.parse(JSON.stringify(row))
    /**
     * se realiza un 'deep clone' del objeto para poder eliminar atributos a medida que se procesa y no alterar la referencia original
     */
    this.stg.setItem("departamento_judicial" + rowCloned.id, rowCloned);
  }

}
