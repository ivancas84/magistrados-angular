import { Component, Input, SimpleChanges, OnChanges} from '@angular/core';
import { FieldLabelComponent } from '@component/field-label/field-label.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';

@Component({
  selector: 'app-field-label-organo',
  templateUrl: './field-label-organo.component.html',
})
export class FieldLabelOrganoComponent extends FieldLabelComponent {
  @Input() entityName: string = "persona";

  constructor(protected dd: DataDefinitionService) { 
    super(dd);
  }
  
  ngOnChanges(changes: SimpleChanges){
    if( changes['id'] && changes['id'].previousValue != changes['id'].currentValue ) {
      if(!changes['id'].currentValue) this.label = null;
      else {
        this.dd.get(this.entityName, this.id).subscribe(
          (row) => {
            if(row.organo == "2") this.label = "*"
          }
        );
      }
    }
  }

}
