import { Injectable } from '@angular/core';

import { _DataDefinitionLabelService } from '@service/data-definition-label/_data-definition-label.service';

@Injectable({
  providedIn: 'root'
})
export class DataDefinitionLabelService extends _DataDefinitionLabelService{ 

  labelPersonaRow (row: any): string {
    if(!row) return null;

    let ret = "";
    if (row["apellidos"]) ret = ret + row["apellidos"];

    if (row["nombres"]) ret = ret + ", " + row["nombres"];
   
    return ret;
  }
  
}
