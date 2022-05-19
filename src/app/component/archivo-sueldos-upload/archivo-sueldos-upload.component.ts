import { Component } from '@angular/core';
import { UploadComponent } from '@component/upload/upload.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { InputYmConfig } from '@component/input-ym/input-ym.component';
import { InputSelectConfig } from '@component/input-select/input-select.component';

@Component({
  selector: 'app-archivo-sueldos-upload-sueldos',
  templateUrl: './archivo-sueldos-upload.component.html',
})
export class ArchivoSueldosUploadComponent extends UploadComponent {
  override entityName: string = "archivo_sueldos"; // archivo sueldos = archivo de afiliaciones + archivo de tramites exepcionales
  isSaved = false;

  constructor(
    protected override fb: FormBuilder, 
    protected override dd: DataDefinitionService, 
    protected override dialog: MatDialog,
    protected override snackBar: MatSnackBar,
    protected override location: Location,
    protected storage: SessionStorageService 
  ) {
    super(fb, dd, dialog, snackBar, location);
  }

  override control: FormGroup = this.fb.group(
    {
      file: [null, {
        validators: [Validators.required],
      }],

      organo: [null, {
        validators: [Validators.required],
      }],

      periodo: [new Date(), {
        validators: [Validators.required],
      }],
    }
  );

  configPeriodo: InputYmConfig = new InputYmConfig({
    label:"Periodo"
  });
  configOrgano: InputSelectConfig = new InputSelectConfig({
    label:"Organo",
    entityName:"organo"
  })

  override formData(): FormData{
    const file = this.file!.value._files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("organo", this.organo.value);
    formData.append("periodo", this.periodo.value.toJSON());
    return formData;
  }

  get organo() { return this.control.controls['organo'] as FormControl}
  get periodo() { return this.control.controls['periodo'] as FormControl}


  progress = 0;
  saveStatus: string = "unsaved";

  save(progress = 0){
    this.saveStatus = "saving";
    var s = this.dd._post("persist", "archivo_sueldos", {log:this.response["log"], progress:progress}).subscribe({
      next: (res) => {
        this.progress = (res["progress"]+1) * 100 / res["total"];
        if(res["progress"]+1 < (res["total"])) this.save(res["progress"]+1);
        else {
          this.storage.clear();
          this.saveStatus = "saved";
          this.snackBar.open("Procesamiento realizado", "X");
        }
      },
      error: (err)=> {
        this.saveStatus = "unsaved";
        this.dialog.open(DialogAlertComponent, {
          data: {title: "Error", message: err.error}
        });
      }
    })
    this.subscriptions.add(s);
  }
  

  delete() {
    var s = this.dd._post("delete", "archivo_sueldos", {evaluado:this.response["evaluado"]}).subscribe({
      next: (res) => {
        this.snackBar.open("Se han eliminado los registros recientes", "X");
      },
      error: (err) => {
        this.dialog.open(DialogAlertComponent, {
          data: {title: "Error", message: err.error}
        });
      }
    });
    this.subscriptions.add(s);
  }

  finalize(){
    this.snackBar.open("Procesamiento finalizado", "X");
    this.isSubmitted = false;
    this.response = null;
  }

  
}

