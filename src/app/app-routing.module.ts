import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { IaAfiliacionShowComponent } from '@component/informe-afiliados/ia-afiliacion-show/ia-afiliacion-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { UploadInfoSueldosComponent } from '@component/upload-info-sueldos/upload-info-sueldos.component';
import { CreateInfoSueldosComponent } from '@component/create-info-sueldos/create-info-sueldos.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { ArchivoAfiliacionesCreateComponent } from '@component/archivo-afiliaciones-create/archivo-afiliaciones-create/archivo-afiliaciones-create.component';
import { LoginComponent } from '@component/login/login.component';
import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { ArchivoSueldosUploadComponent } from '@component/archivo-sueldos-upload/archivo-sueldos-upload.component';
import { DepartamentoJudicialAdminArrayComponent } from '@component/departamento-judicial-admin-array/departamento-judicial-admin-array/departamento-judicial-admin-array.component';
import { ImporteSummaryComponent } from '@component/importe-summary/importe-summary/importe-summary.component';

const routes: Routes = [
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'archivo-afiliaciones-create', component: ArchivoAfiliacionesCreateComponent, pathMatch: 'full' },
  { path: 'archivo-afiliaciones-show', component: ArchivoAfiliacionesShowComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-upload', component: ArchivoSueldosUploadComponent, pathMatch: 'full' },
  { path: 'create-info-sueldos', component: CreateInfoSueldosComponent, pathMatch: 'full' },
  { path: 'departamento-judicial-admin', component: DepartamentoJudicialAdminArrayComponent, pathMatch: 'full' },
  { path: 'importe-summary', component: ImporteSummaryComponent, pathMatch: 'full' },
  { path: 'informe-afiliados', component: IaAfiliacionShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'upload-info-sueldos', component: UploadInfoSueldosComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-admin', component: TramiteExcepcionalAdminComponent, pathMatch: 'full' },
  
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
