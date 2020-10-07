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
    let display = new Display();
    console.log(this.params);
    display.setSize(0);
    display.setParamsByQueryParams(this.params);
    this.display$.next(display);
  }

  data(): Observable<any>{
    if(!Object.keys(this.display$.value.getParams()).includes("per_departamento_judicial")) return of([]);
    return this.dd.all(this.entityName, this.display$.value);
  }

}

