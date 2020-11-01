import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-archivo-afiliaciones-show',
  templateUrl: './archivo-afiliaciones-show.component.html',
})
export class ArchivoAfiliacionesShowComponent extends ShowComponent {

  readonly entityName: string = "archivo_afiliaciones";

  ngOnInit(): void {
    this.load$ = this.initData().pipe(
      map(
        data => {
          this.data = data;

        }
      )
    )
  }

  initData(): Observable<any>{
    /**
     * Conviene no pasar como parametro el valor de collectionSize$
     * puede que se desee que este valor sea opcional al sobrescribir el metodo
     */
    return this.dd.post("list", this.entityName);
  }
}

