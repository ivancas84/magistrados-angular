import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import localeEsAr from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAr, 'es-AR');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialFileInputModule } from 'ngx-material-file-input';
//import { MatTimepickerModule } from 'mat-timepicker';
import { CookieService } from 'ngx-cookie-service';

import { AppMaterialModule } from './core/app-material.module';

//import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
//import { GoogleLoginProvider } from 'angularx-social-login';
import { GOOGLE_CLIENT_ID } from './app.config';

//import { ClipboardModule } from '@angular/cdk/clipboard';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { DataDefinitionService } from '@service/data-definition/data-definition.service';
//import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { AuthService } from '@service/auth/auth.service';

import { ToDatePipe } from '@pipe/to-date.pipe';
import { ToTimePipe } from '@pipe/to-time.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { StoragePipe } from '@pipe/storage.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';

import { DataDefinitionStorageService } from '@service/data-definition-storage.service';
import { DataDefinitionLabelService } from '@service/data-definition-label/data-definition-label.service';

import { LoginComponent } from '@component/login/login.component';
import { LogoutComponent } from '@component/logout/logout.component';
import { HomeComponent } from '@component/home/home.component';
import { SocialLoginComponent } from '@component/social-login/social-login.component';

import { BackupComponent } from '@component/backup/backup.component';
import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from '@component/dialog-confirm/dialog-confirm.component';
import { InputAutocompleteComponent } from '@component/input-autocomplete/input-autocomplete.component';
import { InputDateComponent } from '@component/input-date/input-date.component';
import { InputNumberComponent } from '@component/input-number/input-number.component';
import { InputSelectCheckboxComponent } from '@component/input-select-checkbox/input-select-checkbox.component';
import { InputSelectComponent } from '@component/input-select/input-select.component';
import { InputSelectValueComponent } from '@component/input-select-value/input-select-value.component';
import { InputSelectParamComponent } from '@component/input-select-param/input-select-param.component';
import { InputSelectLabelComponent } from '@component/input-select-label/input-select-label.component';
import { InputSearchGoComponent } from '@component/input-search-go/input-search-go.component';
import { InputTextComponent } from '@component/input-text/input-text.component';
import { TextareaComponent } from '@component/textarea/textarea.component';
import { InputTimepickerComponent } from '@component/input-timepicker/input-timepicker.component';
import { InputCheckboxComponent } from '@component/input-checkbox/input-checkbox.component';
import { InputYmComponent } from '@component/input-ym/input-ym.component';
import { InputYearComponent } from '@component/input-year/input-year.component';
import { MenuComponent } from '@component/menu/menu.component';
import { SearchAllComponent } from '@component/search-all/search-all.component';
import { LabelComponent } from '@component/label/label.component';
import { FieldLabelComponent } from '@component/field-label/field-label.component';
import { FieldTreeLabelComponent } from '@component/field-tree-label/field-tree-label.component';
import { FieldViewComponent } from '@component/field-view/field-view.component';
import { FieldViewAuxComponent } from '@component/field-view-aux/field-view-aux.component';

import { FieldLabelOrganoComponent } from '@component/reusable/field-label-organo/field-label-organo.component';

import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionFieldsetComponent } from '@component/afiliacion-admin/afiliacion-fieldset/afiliacion-fieldset.component';


import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { ArchivoAfiliacionesTableComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-table/archivo-afiliaciones-table.component';

import { DepartamentoJudicialAdminArrayComponent } from '@component/departamento-judicial-admin-array/departamento-judicial-admin-array/departamento-judicial-admin-array.component';

import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaAfiliacionTableComponent } from '@component/persona-admin/afiliacion-table/afiliacion-table.component';

import { PTramiteExcepcionalTableComponent } from '@component/persona-admin/tramite-excepcional-table/tramite-excepcional-table.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { TramiteExcepcionalFieldsetComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-fieldset/tramite-excepcional-fieldset.component';
import { ArchivoSueldosUploadComponent } from '@component/archivo-sueldos-upload/archivo-sueldos-upload.component';

import { ImporteSummaryComponent } from '@component/importe-summary/importe-summary/importe-summary.component';
import { ImporteSummarySearchComponent } from '@component/importe-summary/importe-summary-search/importe-summary-search.component';
import { ImporteSummarySearchParamsComponent } from '@component/importe-summary/importe-summary-search-params/importe-summary-search-params.component';
import { ImporteSummaryTableComponent } from '@component/importe-summary/importe-summary-table/importe-summary-table.component';

import { ImporteAfiliacionShowComponent } from '@component/importe-afliliacion-show/importe-afiliacion-show/importe-afiliacion-show.component';
import { ImporteAfiliacionTableComponent } from '@component/importe-afliliacion-show/importe-afiliacion-table/importe-afiliacion-table.component';
import { ImporteAfiliacionSearchComponent } from '@component/importe-afliliacion-show/importe-afiliacion-search/importe-afiliacion-search.component';
import { ImporteAfiliacionSearchParamsComponent } from '@component/importe-afliliacion-show/importe-afiliacion-search-params/importe-afiliacion-search-params.component';

import { ImporteDeleteComponent } from '@component/importe-delete/importe-delete/importe-delete.component';
import { ImporteDeleteFieldsetComponent } from '@component/importe-delete/importe-delete-fieldset/importe-delete-fieldset.component';

import { ImporteTramiteExcepcionalShowComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-show/importe-tramite-excepcional-show.component';
import { ImporteTramiteExcepcionalTableComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-table/importe-tramite-excepcional-table.component';
import { ImporteTramiteExcepcionalSearchComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-search/importe-tramite-excepcional-search.component';
import { ImporteTramiteExcepcionalSearchParamsComponent } from '@component/importe-tramite-excepcional-show/importe-tramite-excepcional-search-params/importe-tramite-excepcional-search-params.component';

import { ArchivoSueldosCreateComponent } from '@component/archivo-sueldos-create/archivo-sueldos-create/archivo-sueldos-create.component';
import { ArchivoSueldosCreateFieldsetComponent } from '@component/archivo-sueldos-create/archivo-afiliaciones-create-fieldset/archivo-sueldos-create-fieldset.component';
import { FieldTreeComponent } from '@component/field-tree/field-tree.component';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { TotalSummaryTableComponent } from '@component/total-summary/total-summary-table/total-summary-table.component';
import { TotalSummaryComponent } from '@component/total-summary/total-summary/total-summary.component';
import { SucursalAdminArrayComponent } from '@component/sucursal-admin-array/sucursal-admin-array.component';
import { InputPersistComponent } from '@component/input-persist/input-persist.component';
import { TipoDocumentoAdminArrayComponent } from '@component/tipo-documento-admin-array/tipo-documento-admin-array.component';
import { TableDynamicComponent } from '@component/table/table-dynamic.component';
import { CardDynamicComponent } from '@component/card/card-dynamic.component';
import { FieldsetDynamicComponent } from '@component/fieldset/fieldset-dynamic.component';
import { FieldsetArrayDynamicComponent } from '@component/fieldset-array/fieldset-array-dynamic.component';
import { SearchDynamicComponent } from '@component/search/search-dynamic.component';
import { SearchParamsDynamicComponent } from '@component/search-params/search-params-dynamic.component';
import { ErrorUniqueRouteComponent } from '@component/error-unique/error-unique-route.component';
import { AfiliacionShow2Component } from '@component/afiliacion-show2/afiliacion-show.component';
import { TramiteExcepcionalShow2Component } from '@component/tramite-excepcional-show2/tramite-excepcional-show.component';




@NgModule({
  declarations: [
    AppComponent,

    ToDatePipe, 
    ToTimePipe, 
    SiNoPipe, 
    SummaryPipe, 
    StoragePipe,

    LoginComponent,
    SocialLoginComponent,
    LogoutComponent,
    HomeComponent,
    BackupComponent,

    DialogAlertComponent,
    DialogConfirmComponent,
    FieldViewAuxComponent,
    FieldViewComponent,
    InputAutocompleteComponent,
    InputCheckboxComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectCheckboxComponent,
    InputSelectComponent,
    InputSelectValueComponent,
    InputSelectParamComponent,
    InputSelectLabelComponent,
    InputSearchGoComponent,
    InputTextComponent,
    TextareaComponent,
    InputPersistComponent,
    //InputTimepickerComponent,
    InputYearComponent,
    InputYmComponent,
    MenuComponent,
    SearchAllComponent,
    LabelComponent,
    FieldLabelComponent,
    FieldTreeLabelComponent,
    FieldTreeComponent,
    TableDynamicComponent,
    CardDynamicComponent,
    FieldsetDynamicComponent,
    FieldsetArrayDynamicComponent,
    SearchDynamicComponent,
    SearchParamsDynamicComponent,
    ErrorUniqueRouteComponent,
    //DynamicTableComponent,

    FieldLabelOrganoComponent,
    AfiliacionAdminComponent, AfiliacionFieldsetComponent,
    AfiliacionShow2Component,
    TramiteExcepcionalShow2Component,
    ArchivoSueldosCreateComponent, ArchivoSueldosCreateFieldsetComponent,
    ArchivoAfiliacionesShowComponent, ArchivoAfiliacionesTableComponent,
    ArchivoSueldosUploadComponent,
    DepartamentoJudicialAdminArrayComponent,
    PersonaAdminComponent, PersonaAfiliacionTableComponent, 
    PTramiteExcepcionalTableComponent,
    TramiteExcepcionalAdminComponent, TramiteExcepcionalFieldsetComponent,
    ImporteAfiliacionShowComponent, ImporteAfiliacionTableComponent, ImporteAfiliacionSearchComponent, ImporteAfiliacionSearchParamsComponent,
    ImporteDeleteComponent, ImporteDeleteFieldsetComponent,
    ImporteSummaryComponent, ImporteSummarySearchComponent, ImporteSummarySearchParamsComponent, ImporteSummaryTableComponent,
    ImporteTramiteExcepcionalShowComponent, ImporteTramiteExcepcionalTableComponent, ImporteTramiteExcepcionalSearchComponent, ImporteTramiteExcepcionalSearchParamsComponent,
    SucursalAdminArrayComponent,
    TotalSummaryComponent, TotalSummaryTableComponent,
    TipoDocumentoAdminArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    //SocialLoginModule,
    //ClipboardModule,

    AppMaterialModule,

    MaterialFileInputModule,
    //MatTimepickerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000, verticalPosition:"top", horizontalPosition:"right"}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    CookieService,
    
    AuthService,
    DataDefinitionService, 
    DataDefinitionToolService,
    SessionStorageService, 
    ValidatorsService,
    
    DataDefinitionStorageService, 
    DataDefinitionLabelService, 

    /*{provide: 'SocialAuthServiceConfig', useValue: { autoLogin: false,  providers: [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(GOOGLE_CLIENT_ID)
      },
    ]} as SocialAuthServiceConfig, }*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
