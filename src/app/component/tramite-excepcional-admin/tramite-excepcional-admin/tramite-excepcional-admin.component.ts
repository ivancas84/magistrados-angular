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

@Component({
  selector: 'app-tramite-excepcional-admin',
  templateUrl: './tramite-excepcional-admin.component.html',
})
export class TramiteExcepcionalAdminComponent extends AdminComponent {

  readonly entityName: string = "tramite_excepcional";

  reload(response){
    this.back();
  }
}

