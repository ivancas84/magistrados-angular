import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';

const routes: Routes = [
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
