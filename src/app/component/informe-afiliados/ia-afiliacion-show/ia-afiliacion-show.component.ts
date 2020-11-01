import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { Display } from '@class/display';
import { first } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-ia-afiliacion-show',
  templateUrl: './ia-afiliacion-show.component.html',
})
export class IaAfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "afiliacion";

  
  initDisplay(): void {
    this.display = new Display();
    this.display.setSize(0);
    this.display.setParamsByQueryParams(this.params);
  }

  
  initData(): Observable<any>{
    if(!Object.keys(this.display.getParams()).includes("per-departamento_judicial")) return of([]);
    return this.dd.all(this.entityName, this.display);
  }

}

