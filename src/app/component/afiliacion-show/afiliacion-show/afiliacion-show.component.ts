import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-afiliacion-show',
  templateUrl: './afiliacion-show.component.html',
})
export class AfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "afiliacion";

}

