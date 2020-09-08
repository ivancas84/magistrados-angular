import { Component } from '@angular/core';
import { UploadComponent } from '@component/upload/upload.component';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SessionStorageService } from '@service/storage/session-storage.service';

@Component({
  selector: 'app-info-upload-sueldos',
  templateUrl: './upload-info-sueldos.component.html',
})
export class UploadInfoSueldosComponent extends UploadComponent {
  readonly entityName: string = "info_sueldos";

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar,
    protected location: Location,
    protected storage: SessionStorageService 
  ) {
    super(fb, dd, dialog, snackBar, location);
  }

  uploadForm: FormGroup = this.fb.group(
    {
      file: [null, {
        validators: [Validators.required],
      }],

      organo: [null, {
        validators: [Validators.required],
      }],
    }
  );

  formData(): FormData{
    /**
     * @override
     */

    const file = this.file.value._files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("organo", this.organo.value);
    return formData;
  }

  upload(): void {
    /**
     * @override
     */    
    this.dd.upload(this.entityName, this.formData()).subscribe(
      (res) => {
        this.response = res;
        console.log(res);
        this.storage.removeItemsPersisted(this.response["detail"]);
        this.snackBar.open("Archivo subido", "X");
      },
      (err) => {
        this.isSubmitted = false;  
        this.dialog.open(DialogAlertComponent, {
          data: {title: "Error", message: err.error}
        });
      }
    );
  }
  get organo() { return this.uploadForm.get('organo')}

  
}

