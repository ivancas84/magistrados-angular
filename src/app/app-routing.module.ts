import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';

const routes: Routes = [
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
