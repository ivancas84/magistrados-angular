
import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-AR');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './core/app-material.module';
import { AppCoreModule } from './core/app-core.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { MenuComponent } from '@component/menu/menu.component';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    PersonaAdminComponent,
    AfiliacionAdminComponent,
    AfiliacionShowComponent,
    TramiteExcepcionalAdminComponent,
    TramiteExcepcionalShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    AppCoreModule,
    
    MaterialFileInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
