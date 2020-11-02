import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

import { Sort } from '@angular/material/sort';
import { emptyUrl } from '@function/empty-url.function';
import { compare } from '@function/compare';
import { FILE_URL } from '@config/app.config';

@Component({
  selector: 'app-archivo-afiliaciones-table',
  templateUrl: './archivo-afiliaciones-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class ArchivoAfiliacionesTableComponent extends TableComponent { 
  fileUrl = FILE_URL
}
