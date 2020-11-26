import { Component } from '@angular/core';
import { Display } from '@class/display';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-importe-afiliacion-show',
  templateUrl: './importe-afiliacion-show.component.html',
})
export class ImporteAfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "importe_afiliacion";

  initDisplay() {
    this.display = new Display();
    this.display.setSize(100);
    this.display.setParamsByQueryParams(this.params);
  }
}

