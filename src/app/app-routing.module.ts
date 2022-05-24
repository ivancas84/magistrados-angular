import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { ArchivoSueldosCreateComponent } from '@component/archivo-sueldos-create/archivo-sueldos-create.component';
import { ArchivoSueldosUploadComponent } from '@component/archivo-sueldos-upload/archivo-sueldos-upload.component';
import { BackupComponent } from '@component/backup/backup.component';
import { ConfiguracionValorAdminArrayComponent } from '@component/configuracion-valor-admin-array/configuracion-valor-admin-array.component';
import { DepartamentoJudicialAdminArrayComponent } from '@component/departamento-judicial-admin-array/departamento-judicial-admin-array.component';
import { ImporteAfiliacionShowComponent } from '@component/importe-afliliacion-show/importe-afiliacion-show.component';
import { ImporteDeleteComponent } from '@component/importe-delete/importe-delete.component';
import { ImporteSummary162Component } from '@component/importe-summary-162/importe-summary-162.component';
import { ImporteSummaryComponent } from '@component/importe-summary/importe-summary.component';
import { ImporteTramiteExcepcionalShowComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { SucursalAdminArrayComponent } from '@component/sucursal-admin-array/sucursal-admin-array.component';
import { TipoDocumentoAdminArrayComponent } from '@component/tipo-documento-admin-array/tipo-documento-admin-array.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show.component';
import { ViaticoAdminComponent } from '@component/viatico-admin/viatico-admin.component';

const routes: Routes = [
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'archivo-afiliaciones-show', component: ArchivoAfiliacionesShowComponent, pathMatch: 'full' },
  { path: 'archivo-sueldos-create', component: ArchivoSueldosCreateComponent  , pathMatch: 'full' },
  { path: 'archivo-sueldos-upload', component: ArchivoSueldosUploadComponent, pathMatch: 'full' },
  { path: 'backup', component: BackupComponent, pathMatch: 'full' },
  { path: 'configuracion-valor-admin', component: ConfiguracionValorAdminArrayComponent, pathMatch: 'full' },
  { path: 'departamento-judicial-admin', component: DepartamentoJudicialAdminArrayComponent, pathMatch: 'full' },
  { path: 'importe-afiliacion-show', component: ImporteAfiliacionShowComponent, pathMatch: 'full' },
  { path: 'importe-delete', component: ImporteDeleteComponent, pathMatch: 'full' },
  { path: 'importe-summary', component: ImporteSummaryComponent, pathMatch: 'full' },
  { path: 'importe-summary-162', component: ImporteSummary162Component, pathMatch: 'full' },
  { path: 'importe-tramite-excepcional-show', component: ImporteTramiteExcepcionalShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'sucursal-admin', component: SucursalAdminArrayComponent, pathMatch: 'full' },
  { path: 'tipo-documento-admin', component: TipoDocumentoAdminArrayComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-admin', component: TramiteExcepcionalAdminComponent  , pathMatch: 'full' },
  { path: 'tramite-excepcional-show', component: TramiteExcepcionalShowComponent  , pathMatch: 'full' },
  { path: 'viatico-admin', component: ViaticoAdminComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
