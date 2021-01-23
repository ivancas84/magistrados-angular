import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { isEmptyObject } from '@function/is-empty-object.function';
import { Observable, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-total-summary',
  templateUrl: './total-summary.component.html',
})
export class TotalSummaryComponent extends ShowComponent {

  readonly entityName: string = "importe";

  initLength(): Observable<any> {  //@override
    return of(false);
  }

  initData(): Observable<any>{ //@override
    return of({}).pipe(
      switchMap(
        () => {         
          if(!this.display.hasOwnProperty("params")) return of([]);
          return this.dd.post("info", this.entityName, this.display.getParams());
        }
      ),
      tap(
        data => {
          this.data = data;
        }
      )
    )
  }

}

