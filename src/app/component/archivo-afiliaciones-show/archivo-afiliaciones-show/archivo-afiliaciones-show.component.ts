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
    this.load$ = this.dd.post("list", this.entityName).pipe(
      map(
        data => {
          this.data = data;
          return true;
        }
      )
    )
  }
}

