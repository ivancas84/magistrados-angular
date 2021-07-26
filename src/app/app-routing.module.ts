import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupComponent } from '@component/backup/backup.component';
import { LoginComponent } from '@component/login/login.component';
import { PersonaAdmin2Component } from '@component/persona-admin-2/persona-admin-2.component';

const routes: Routes = [
  { path: 'backup', component: BackupComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdmin2Component, pathMatch: 'full' },


  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', component: PersonaAdmin2Component, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
