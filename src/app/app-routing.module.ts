import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { BackupComponent } from '@component/backup/backup.component';
import { LoginComponent } from '@component/login/login.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';

const routes: Routes = [
  { path: 'backup', component: BackupComponent, pathMatch: 'full' },
  { path: 'afiliacion-admin', component: AfiliacionAdminComponent, pathMatch: 'full' },

  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'afiliacion-show', component: AfiliacionShowComponent, pathMatch: 'full' },


  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
