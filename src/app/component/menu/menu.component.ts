import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges { 

  @Input() authenticated = false;
  view = [];

  constructor(
    protected auth: AuthService, 
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.authenticated.currentValue != changes.authenticated.previousValue){
      if(this.authenticated){
        var token = this.auth.getToken();
        this.view = (token && token.hasOwnProperty("view")) ? token["view"] : [];
      } else {
        this.view = [];
      }
    }
  }

  afiliacionShowQueryParams:  { [index: string]: boolean|string|number };
  summaryQueryParams:  { [index: string]: boolean|string|number };
  importeAfiliacionShowQueryParams:  { [index: string]: boolean|string|number };
  importeTramiteExcepcionalShowQueryParams:  { [index: string]: boolean|string|number };

  ngOnInit() {
    this.afiliacionShowQueryParams = {
      "modificado.is_set":'false', 
      order:JSON.stringify({"per-apellidos":'asc'}),
    }

    var d = new Date()
    d.setMonth(d.getMonth()-1);
    this.summaryQueryParams = {
      periodo:d.toJSON(),
      //organo:"1"
    }

    this.importeAfiliacionShowQueryParams = {
      "periodo.ym":d.toJSON(),
      "afi_per-organo":"1",
      "afi_per-departamento_judicial":"1",
      order:JSON.stringify({"afi_per-apellidos":'asc'}),
    }
    this.importeTramiteExcepcionalShowQueryParams = {
      "periodo.ym":d.toJSON(),
      order:JSON.stringify({"te_per-apellidos":'asc'}),
    }
  }
  
}
