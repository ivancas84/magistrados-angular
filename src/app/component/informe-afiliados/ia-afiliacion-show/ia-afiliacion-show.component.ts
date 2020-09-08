import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { Display } from '@class/display';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ia-afiliacion-show',
  templateUrl: './ia-afiliacion-show.component.html',
})
export class IaAfiliacionShowComponent extends ShowComponent {

  readonly entityName: string = "afiliacion";

  
  initDisplay(params: { [x: string]: any; }): void {
    let display = new Display();
    console.log(params);
    display.setSize(0);
    display.setParamsByQueryParams(params);
    this.display$.next(display);
  }

  initData(){
    if(!Object.keys(this.display$.value.getParams()).includes("per_departamento_judicial")){
      return;
    }
    this.dd.all(this.entityName, this.display$.value).pipe(first()).subscribe(
      rows => { this.data$.next(rows); }
    ); 
  }

}

