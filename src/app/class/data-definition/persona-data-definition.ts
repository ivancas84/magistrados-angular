import { _PersonaDataDefinition } from './_persona-data-definition';

export class PersonaDataDefinition extends _PersonaDataDefinition { 

  label (id: string | number): string {
    var row = this.stg.getItem(this.entity + id);
    if(!row) return null;

    let ret = "";
    if (row["apellidos"]) ret = ret.trim() + " " + row["apellidos"];

    if (row["nombres"]) ret = ret.trim() + ", " + row["nombres"];
   
    return ret.trim();
  }

}
