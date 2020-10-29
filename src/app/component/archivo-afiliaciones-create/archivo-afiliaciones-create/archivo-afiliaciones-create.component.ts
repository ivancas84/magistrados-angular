import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminComponent } from '@component/admin/admin.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-archivo-afiliaciones-create',
  templateUrl: './archivo-afiliaciones-create.component.html',
})
export class ArchivoAfiliacionesCreateComponent extends AdminComponent {

  readonly entityName: string = "archivo_afiliaciones";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar
  ) {
    super(fb, route, router, location, dd, storage, dialog, snackBar);
  }

  persist(): Observable<any> {
    return this.dd.post("create", this.entityName, this.serverData());
  }
  
  reload(response){
    console.log(response);
    console.log("visualizar lista de archivos creados ordenados de forma descendiente");
    /**
     * Recargar una vez persistido
     *
    let route = emptyUrl(this.router.url) + "?id="+response["id"];
    if(route != this.router.url) this.router.navigateByUrl('/' + route, {replaceUrl: true});
    else this.setData();
    this.snackBar.open("Registro realizado", "X");
    this.isSubmitted = false;*/
  }

}

