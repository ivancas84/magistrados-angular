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
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-archivo-sueldos-create',
  templateUrl: './archivo-sueldos-create.component.html',
})
export class ArchivoSueldosCreateComponent extends AdminComponent {

  entityName: string = "archivo_sueldos";

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

