import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-tramite-excepcional-show',
  templateUrl: './tramite-excepcional-show.component.html',
})
export class TramiteExcepcionalShowComponent extends ShowComponent {

  readonly entityName: string = "tramite_excepcional";

}

