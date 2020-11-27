import { Component } from '@angular/core';
import { Display } from '@class/display';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-importe-tramite-excepcional-show',
  templateUrl: './importe-tramite-excepcional-show.component.html',
})
export class ImporteTramiteExcepcionalShowComponent extends ShowComponent {

  readonly entityName: string = "importe_tramite_excepcional";

  initDisplay() {
    this.display = new Display();
    this.display.setSize(0);
    this.display.setParamsByQueryParams(this.params);
  }
}

