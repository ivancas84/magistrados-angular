import { Component } from '@angular/core';
import { UploadComponent } from '@component/upload/upload.component';

@Component({
  selector: 'app-info-upload-sueldos',
  templateUrl: './upload-info-sueldos.component.html',
})
export class UploadInfoSueldosComponent extends UploadComponent {
  readonly entityName: string = "info_sueldos";
}

