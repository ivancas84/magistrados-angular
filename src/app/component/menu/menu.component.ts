import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '@service/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit, OnChanges { 

  @Input() jwt?: string = "";
  logoutMenu = false;
  loginMenu = true;

  constructor(
    protected auth: AuthService, 
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.jwt.currentValue != changes.jwt.previousValue){
      if(this.auth.isAuthenticated()){
        this.logoutMenu = true;
        this.loginMenu = false;
      } else {
        this.logoutMenu = false;
        this.loginMenu = true;
      }
    }
  }

  afiliacionShowQueryParams:  { [index: string]: boolean|string|number };
 
  ngOnInit() {
    this.afiliacionShowQueryParams = {
      "modificado.is_set":'false', 
      order:JSON.stringify({creado:'desc',"per-apellidos":'asc'})
    }
  }

  logout(){
    this.auth.logout();
  }
}