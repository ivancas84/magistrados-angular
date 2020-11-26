import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges { 

  @Input() jwt?: string;
  authenticated = false;
  view = [];

  constructor(
    protected auth: AuthService, 
  ) { }

 ngOnChanges(changes: SimpleChanges): void {
    if(changes.jwt.currentValue != changes.jwt.previousValue){
      this.authenticated = this.auth.isAuthenticated();
      if(this.authenticated){
        var token = this.auth.getToken();
        this.view = (token && token.hasOwnProperty("view")) ? token["view"] : [];
      } else {
        this.view = [];
      }
    }
  }

  afiliacionShowQueryParams:  { [index: string]: boolean|string|number };
  importeSummaryQueryParams:  { [index: string]: boolean|string|number };
  importeAfiliacionShowQueryParams:  { [index: string]: boolean|string|number };

  ngOnInit() {
    this.afiliacionShowQueryParams = {
      "modificado.is_set":'false', 
      order:JSON.stringify({"per-apellidos":'asc'}),
      motivo:"Alta",
      estado:"Aprobado"
    }

    this.importeSummaryQueryParams = {
      periodo:new Date().toJSON(),
      organo:"1"
    }

    this.importeAfiliacionShowQueryParams = {
      "periodo.ym":new Date().toJSON(),
      "afi_per-organo":"1",
      "afi_per-departamento_judicial":"1",
      order:JSON.stringify({"afi_per-apellidos":'asc'}),
    }
  }

}