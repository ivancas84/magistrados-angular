import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-AR');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { AppMaterialModule } from './core/app-material.module';

import { MenuComponent } from '@component/menu/menu.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
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
import { ImporteSummary162Component } from '@component/importe-summary-162/importe-summary-162.component';
import { AppCoreModule } from './core/app-core.module';
import { ImporteAfiliacionShowComponent } from '@component/importe-afliliacion-show/importe-afiliacion-show.component';
import { ImporteTramiteExcepcionalShowComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-show.component';
import { ImporteDeleteComponent } from '@component/importe-delete/importe-delete/importe-delete.component';
import { ImporteDeleteFieldsetComponent } from '@component/importe-delete/importe-delete-fieldset/importe-delete-fieldset.component';

@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    AfiliacionAdminComponent,
    AfiliacionShowComponent,
    ArchivoSueldosCreateComponent,
    ArchivoSueldosUploadComponent,
    ArchivoAfiliacionesShowComponent,
    PersonaAdminComponent,
    TramiteExcepcionalAdminComponent,
    TramiteExcepcionalShowComponent,
    DepartamentoJudicialAdminArrayComponent,
    ImporteSummaryComponent,
    SucursalAdminArrayComponent,
    TipoDocumentoAdminArrayComponent,
    ViaticoAdminComponent,
    ConfiguracionValorAdminArrayComponent,
    ImporteSummary162Component,
    ImporteAfiliacionShowComponent,
    ImporteTramiteExcepcionalShowComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
