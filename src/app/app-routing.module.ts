import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { BackupComponent } from '@component/backup/backup.component';
import { LoginComponent } from '@component/login/login.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { ArchivoSueldosCreateComponent } from '@component/archivo-sueldos-create/archivo-sueldos-create.component';
import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { DepartamentoJudicialAdminArrayComponent } from '@component/departamento-judicial-admin-array/departamento-judicial-admin-array.component';
import { ArchivoSueldosUploadComponent } from '@component/archivo-sueldos-upload/archivo-sueldos-upload.component';
import { ImporteSummaryComponent } from '@component/importe-summary/importe-summary.component';
import { ViaticoAdminComponent } from '@component/viatico-admin/viatico-admin.component';
import { SucursalAdminArrayComponent } from '@component/sucursal-admin-array/sucursal-admin-array.component';
import { TipoDocumentoAdminArrayComponent } from '@component/tipo-documento-admin-array/tipo-documento-admin-array.component';
import { ConfiguracionValorAdminArrayComponent } from '@component/configuracion-valor-admin-array/configuracion-valor-admin-array.component';

const routes: Routes = [
  { path: 'backup', component: BackupComponent, pathMatch: 'full' },
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },

  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'archivo-afiliaciones-show', component: ArchivoAfiliacionesShowComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-create', component: ArchivoSueldosCreateComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-upload', component: ArchivoSueldosUploadComponent, pathMatch: 'full' },
  { path: 'departamento-judicial-admin', component: DepartamentoJudicialAdminArrayComponent, pathMatch: 'full' },
  { path: 'importe-summary', component: ImporteSummaryComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'sucursal-admin', component: SucursalAdminArrayComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-admin', component: TramiteExcepcionalAdminComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-show', component: TramiteExcepcionalShowComponent, pathMatch: 'full' },
  { path: 'tipo-documento-admin', component: TipoDocumentoAdminArrayComponent, pathMatch: 'full' },
  { path: 'configuracion-valor-admin', component: ConfiguracionValorAdminArrayComponent, pathMatch: 'full' },


  { path: 'viatico-admin', component: ViaticoAdminComponent, pathMatch: 'full' },

  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
