import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-archivo-afiliaciones-show',
  templateUrl: './archivo-afiliaciones-show.component.html',
})
export class ArchivoAfiliacionesShowComponent extends ShowComponent {

  readonly entityName: string = "archivo_afiliaciones";

  ngOnInit(): void {
    this.load$ = this.route.queryParams.pipe(
      map(
        queryParams => {
          this.initParams(queryParams);
        },
      ),
      switchMap(
        () => {
          return this.dd._post("list", this.entityName, this.params)
        } 
      ),
      map(
        data => {
          this.data = data;
          return true;
        }
      )
    )
  }
}

