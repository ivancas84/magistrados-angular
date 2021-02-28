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
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-importe-delete',
  templateUrl: './importe-delete.component.html',
})
export class ImporteDeleteComponent extends AdminComponent {

  readonly entityName: string = "importe";

  ngOnInit() { //@override
    this.data = null;
  }

  persist(): Observable<any> {
    return this.dd.post("delete", this.entityName, this.serverData());
  }

  removeStorage(response){
    this.storage.clear();
  }
  
  reload(response){
    this.dialog.open(DialogAlertComponent, {
      data: {title: "Importes eliminados", message: "Se han eliminado los importes del período indicado."}
    });

    this.snackBar.open("Se han eliminado los importes", "X");
  }

}

