import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: './importe-afiliacion-show.component.html',
})
export class ImporteAfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "importe_afiliacion";

}

