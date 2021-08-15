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
import { LabelComponent } from '@component/label/label.component';
import { FieldLabelComponent } from '@component/field-label/field-label.component';
import { FieldTreeLabelComponent } from '@component/field-tree-label/field-tree-label.component';
import { FieldViewComponent } from '@component/field-view/field-view.component';
import { FieldWrapComponent } from '@component/field-wrap/field-wrap.component';
import { FieldTreeComponent } from '@component/field-tree/field-tree.component';
import { DataDefinitionToolService } from '@service/data-definition/data-definition-tool.service';
import { InputPersistComponent } from '@component/input-persist/input-persist.component';
import { TableDynamicComponent } from '@component/table/table-dynamic.component';
import { CardDynamicComponent } from '@component/card/card-dynamic.component';
import { FieldsetDynamicComponent } from '@component/fieldset/fieldset-dynamic.component';
import { FieldsetArrayDynamicComponent } from '@component/fieldset-array/fieldset-array-dynamic.component';
import { SearchDynamicComponent } from '@component/search/search-dynamic.component';
import { ErrorUniqueRouteComponent } from '@component/error-unique/error-unique-route.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin.component';
import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show.component';
import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin.component';
import { RelLabelComponent } from '@component/rel-label/rel-label.component';
import { DataDefinitionRelLabelService } from '@service/data-definition/data-definition-rel-label.service';
import { RouteIconComponent } from '@component/route-icon/route-icon.component';
import { FieldsetOptionsComponent } from '@component/fieldset-options/fieldset-options.component';
import { EventButtonComponent } from '@component/event-button/event-button.component';
import { EventIconComponent } from '@component/event-icon/event-icon.component';
import { FieldWrapCardComponent } from '@component/field-wrap-card/field-wrap-card.component';
import { FieldWrapRouterLinkComponent } from '@component/field-wrap-router-link/field-wrap-router-link.component';
import { ArchivoSueldosCreateComponent } from '@component/archivo-sueldos-create/archivo-sueldos-create.component';
import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { LinkTextComponent } from '@component/link-text/link-text.component';
import { TramiteExcepcionalShowComponent } from '@component/tramite-excepcional-show/tramite-excepcional-show.component';




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
    FieldWrapComponent,
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
    FieldWrapCardComponent,
    FieldWrapRouterLinkComponent,
    RouteIconComponent,
    LinkTextComponent,
    EventButtonComponent,
    EventIconComponent,
    //InputTimepickerComponent,
    InputYearComponent,
    InputYmComponent,
    MenuComponent,
    LabelComponent,
    FieldLabelComponent,
    FieldTreeLabelComponent,
    FieldTreeComponent,
    TableDynamicComponent,
    CardDynamicComponent,
    FieldsetDynamicComponent,
    FieldsetOptionsComponent,
    FieldsetArrayDynamicComponent,
    SearchDynamicComponent,
    ErrorUniqueRouteComponent,
    RelLabelComponent,
    //DynamicTableComponent,

    AfiliacionAdminComponent,
    AfiliacionShowComponent,
    ArchivoSueldosCreateComponent,
    ArchivoAfiliacionesShowComponent,
    PersonaAdminComponent,
    TramiteExcepcionalShowComponent,
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
    DataDefinitionRelLabelService, 

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
