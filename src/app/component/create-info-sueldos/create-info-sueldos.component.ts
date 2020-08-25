import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-create-info-sueldos',
  templateUrl: './create-info-sueldos.component.html',
})
export class CreateInfoSueldosComponent {
  readonly entityName: string = "info_sueldos";

  constructor(
    protected dd: DataDefinitionService, 
    protected dialog: MatDialog,
  ) {}
  
  onSubmit(): void {
    console.log("test");
    this.dd.base(this.entityName).subscribe(
      (res) => {
        console.log(res);
        
        this.dialog.open(DialogAlertComponent, {
          data: {title: "Archivo creado", message: "El archivo se ha creado correctamente"}
        });
      },
      (err) => {  
        console.log(err);

        this.dialog.open(DialogAlertComponent, {
          data: {title: "Error", message: err.error}
        });
      }
    );
  }
}

