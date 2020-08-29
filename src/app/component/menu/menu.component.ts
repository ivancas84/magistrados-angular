import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit { 
  afiliacionShowQueryParams
 
  ngOnInit() {
    this.afiliacionShowQueryParams = {
      modificado_is_set:'false', 
      order:JSON.stringify({creado:'desc',per_nombres:'asc'})
    }
  }
}