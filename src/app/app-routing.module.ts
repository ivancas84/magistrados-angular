import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show.component';

const routes: Routes = [
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'tramite-excepcional-admin', component: TramiteExcepcionalAdminComponent  , pathMatch: 'full' },
  { path: 'tramite-excepcional-show', component: TramiteExcepcionalShowComponent  , pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
