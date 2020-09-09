import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { IaAfiliacionShowComponent } from '@component/informe-afiliados/ia-afiliacion-show/ia-afiliacion-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { UploadInfoSueldosComponent } from '@component/upload-info-sueldos/upload-info-sueldos.component';
import { CreateInfoSueldosComponent } from '@component/create-info-sueldos/create-info-sueldos.component';

const routes: Routes = [
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'create-info-sueldos', component: CreateInfoSueldosComponent, pathMatch: 'full' },
  { path: 'informe-afiliados', component: IaAfiliacionShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'upload-info-sueldos', component: UploadInfoSueldosComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdminComponent, pathMatch: 'full' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
