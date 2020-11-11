import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { AdminArrayComponent } from '@component/admin-array/admin-array.component';

@Component({
  selector: 'app-departamento-judicial-admin-array',
  templateUrl: './departamento-judicial-admin-array.component.html',
})
export class DepartamentoJudicialAdminArrayComponent extends AdminArrayComponent{

  readonly entityName: string = "departamento_judicial";

}

