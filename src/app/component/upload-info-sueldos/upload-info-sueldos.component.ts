import { Component } from '@angular/core';
import { UploadComponent } from '@component/upload/upload.component';
import { FormGroup, Validators } from '@angular/forms';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';

@Component({
  selector: 'app-info-upload-sueldos',
  templateUrl: './upload-info-sueldos.component.html',
})
export class UploadInfoSueldosComponent extends UploadComponent {
  readonly entityName: string = "info_sueldos";

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

  response: any = null;

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
        console.log(this.response);
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

