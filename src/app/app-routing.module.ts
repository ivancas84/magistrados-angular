import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupComponent } from '@component/backup/backup.component';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { LoginComponent } from '@component/login/login.component';
import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { ArchivoSueldosUploadComponent } from '@component/archivo-sueldos-upload/archivo-sueldos-upload.component';
import { DepartamentoJudicialAdminArrayComponent } from '@component/departamento-judicial-admin-array/departamento-judicial-admin-array/departamento-judicial-admin-array.component';
import { ImporteSummaryComponent } from '@component/importe-summary/importe-summary/importe-summary.component';
import { ImporteAfiliacionShowComponent } from '@component/importe-afliliacion-show/importe-afiliacion-show/importe-afiliacion-show.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show/tramite-excepcional-show.component';
import { ImporteDeleteComponent } from '@component/importe-delete/importe-delete/importe-delete.component';
import { ImporteTramiteExcepcionalShowComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-show/importe-tramite-excepcional-show.component';
import { ArchivoSueldosCreateComponent } from '@component/archivo-sueldos-create/archivo-sueldos-create/archivo-sueldos-create.component';
import { TotalSummaryComponent } from '@component/total-summary/total-summary/total-summary.component';
import { SucursalAdminArrayComponent } from '@component/sucursal-admin-array/sucursal-admin-array.component';
import { TipoDocumentoAdminArrayComponent } from '@component/tipo-documento-admin-array/tipo-documento-admin-array.component';

const routes: Routes = [
  { path: 'backup', component: BackupComponent, pathMatch: 'full' },

  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-create', component: ArchivoSueldosCreateComponent, pathMatch: 'full' },
  { path: 'archivo-afiliaciones-show', component: ArchivoAfiliacionesShowComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-upload', component: ArchivoSueldosUploadComponent, pathMatch: 'full' },
  { path: 'departamento-judicial-admin', component: DepartamentoJudicialAdminArrayComponent, pathMatch: 'full' },
  { path: 'importe-afiliacion-show', component: ImporteAfiliacionShowComponent, pathMatch: 'full' },
  { path: 'importe-tramite-excepcional-show', component: ImporteTramiteExcepcionalShowComponent, pathMatch: 'full' },
  { path: 'importe-summary', component: ImporteSummaryComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-admin', component: TramiteExcepcionalAdminComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-show', component: TramiteExcepcionalShowComponent, pathMatch: 'full' },
  { path: 'importe-delete', component: ImporteDeleteComponent, pathMatch: 'full' },
  { path: 'total-summary', component: TotalSummaryComponent, pathMatch: 'full' },
  { path: 'sucursal-admin', component: SucursalAdminArrayComponent, pathMatch: 'full' },
  { path: 'tipo-documento-admin-array', component: TipoDocumentoAdminArrayComponent, pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
