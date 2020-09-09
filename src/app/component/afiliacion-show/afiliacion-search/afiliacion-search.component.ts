import { Component } from '@angular/core';
import { SearchComponent } from '@component/search/search.component';
import { Display } from '@class/display';

@Component({
  selector: 'app-afiliacion-search',
  templateUrl: './afiliacion-search.component.html',
})
export class AfiliacionSearchComponent extends SearchComponent {

  search(display: Display): void {
    /** @override
     * Se debe especificar la ruta ya que es una interfaz por defecto
     */
    this.router.navigateByUrl('/afiliacion-show?' + display.encodeURI());  
  }
}
