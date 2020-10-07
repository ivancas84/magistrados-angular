import { Component } from '@angular/core';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-create-info-sueldos',
  templateUrl: './create-info-sueldos.component.html',
})
export class CreateInfoSueldosComponent {
  readonly entityName: string = "info_sueldos";

  constructor(
    protected dd: DataDefinitionService, 
    protected dialog: MatDialog,
    protected storage: SessionStorageService,
  ) {}
  
  onSubmit(): void {
    console.log("test");
    this.dd.post("base", this.entityName).subscribe(
      (res) => {
        /**
         * res: {
         *   file: id de archivo para redireccionar
         *   detail: detalle de entidades actualizadas para remover del storage
         * }
         */
        this.storage.removeItemsPersisted(res["detail"]);
        
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

