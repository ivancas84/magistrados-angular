import { Component, OnInit } from '@angular/core';
import { getSemester } from '@function/get-semester';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit { 

  view = [];

  constructor(
    protected auth: AuthService, 
  ) { }

  
  afiliacionShowQueryParams!:  { [index: string]: boolean|string|number };
  summaryQueryParams!:  { [index: string]: boolean|string|number };
  importeAfiliacionShowQueryParams!:  { [index: string]: boolean|string|number };
  importeTramiteExcepcionalShowQueryParams!:  { [index: string]: boolean|string|number };

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
      "afi-organo":"1",
      "afi-departamento_judicial":"1",
      order:JSON.stringify({"afi_per-apellidos":'asc'}),
    }
    this.importeTramiteExcepcionalShowQueryParams = {
      "periodo.ym":d.toJSON(),
      order:JSON.stringify({"te_per-apellidos":'asc'}),
    }
  }
 
}