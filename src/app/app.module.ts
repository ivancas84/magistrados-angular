import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatTimepickerModule } from 'mat-timepicker';

//import { ClipboardModule } from '@angular/cdk/clipboard';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { CookieService } from 'ngx-cookie-service';
import { ToDatePipe } from '@pipe/to-date.pipe';
import { ToTimePipe } from '@pipe/to-time.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { StoragePipe } from '@pipe/storage.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';

import { DataDefinitionStorageService } from '@service/data-definition-storage.service';
import { DataDefinitionLabelService } from '@service/data-definition-label/data-definition-label.service';

import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { DialogConfirmComponent } from '@component/dialog-confirm/dialog-confirm.component';
import { InputAutocompleteComponent } from '@component/input-autocomplete/input-autocomplete.component';
import { InputDateComponent } from '@component/input-date/input-date.component';
import { InputNumberComponent } from '@component/input-number/input-number.component';
import { InputSelectCheckboxComponent } from '@component/input-select-checkbox/input-select-checkbox.component';
import { InputSelectComponent } from '@component/input-select/input-select.component';
import { InputSelectValueComponent } from '@component/input-select-value/input-select-value.component';
import { InputSelectParamComponent } from '@component/input-select-param/input-select-param.component';
import { InputSearchGoComponent } from '@component/input-search-go/input-search-go.component';
import { InputTextComponent } from '@component/input-text/input-text.component';
import { InputTextareaComponent } from '@component/input-textarea/input-textarea.component';
import { InputTimepickerComponent } from '@component/input-timepicker/input-timepicker.component';
import { InputYmComponent } from '@component/input-ym/input-ym.component';
import { InputYearComponent } from '@component/input-year/input-year.component';
import { MenuComponent } from '@component/menu/menu.component';
import { SearchAllComponent } from '@component/search-all/search-all.component';
import { LabelComponent } from '@component/label/label.component';
import { FieldLabelComponent } from '@component/field-label/field-label.component';
import { FieldTreeLabelComponent } from '@component/field-tree-label/field-tree-label.component';
import { LoginComponent } from '@component/login/login.component';

import { FieldLabelOrganoComponent } from '@component/reusable/field-label-organo/field-label-organo.component';

import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionFieldsetComponent } from '@component/afiliacion-admin/afiliacion-fieldset/afiliacion-fieldset.component';

import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { AfiliacionTableComponent } from '@component/afiliacion-show/afiliacion-table/afiliacion-table.component';
import { AfiliacionSearchComponent } from '@component/afiliacion-show/afiliacion-search/afiliacion-search.component';

import { ArchivoAfiliacionesCreateComponent } from '@component/archivo-afiliaciones-create/archivo-afiliaciones-create/archivo-afiliaciones-create.component';
import { ArchivoAfiliacionesCreateFieldsetComponent } from '@component/archivo-afiliaciones-create/archivo-afiliaciones-create-fieldset/archivo-afiliaciones-create-fieldset.component';

import { ArchivoAfiliacionesShowComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-show/archivo-afiliaciones-show.component';
import { ArchivoAfiliacionesTableComponent } from '@component/archivo-afiliaciones-show/archivo-afiliaciones-table/archivo-afiliaciones-table.component';

import { CreateInfoSueldosComponent } from '@component/create-info-sueldos/create-info-sueldos.component';

import { IaAfiliacionShowComponent } from '@component/informe-afiliados/ia-afiliacion-show/ia-afiliacion-show.component';
import { IaAfiliacionTableComponent } from '@component/informe-afiliados/ia-afiliacion-table/ia-afiliacion-table.component';
import { IaAfiliacionSearchComponent } from '@component/informe-afiliados/ia-afiliacion-search/ia-afiliacion-search.component';
import { IaAfiliacionSearchParamsComponent } from '@component/informe-afiliados/ia-afiliacion-search-params/ia-afiliacion-search-params.component';

import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaFieldsetComponent } from '@component/persona-admin/persona-fieldset/persona-fieldset.component';
import { PersonaAfiliacionTableComponent } from '@component/persona-admin/afiliacion-table/afiliacion-table.component';
import { AfiliacionSearchParamsComponent } from '@component/afiliacion-show/afiliacion-search-params/afiliacion-search-params.component';

import { UploadInfoSueldosComponent } from '@component/upload-info-sueldos/upload-info-sueldos.component';
import { PTramiteExcepcionalTableComponent } from '@component/persona-admin/tramite-excepcional-table/tramite-excepcional-table.component';
import { TramiteExcepcionalAdminComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-admin/tramite-excepcional-admin.component';
import { TramiteExcepcionalFieldsetComponent } from '@component/tramite-excepcional-admin/tramite-excepcional-fieldset/tramite-excepcional-fieldset.component';

@NgModule({
  declarations: [
    AppComponent,

    ToDatePipe, 
    ToTimePipe, 
    SiNoPipe, 
    SummaryPipe, 
    StoragePipe,

    DialogAlertComponent,
    DialogConfirmComponent,
    InputAutocompleteComponent,
    InputDateComponent,
    InputNumberComponent,
    InputSelectCheckboxComponent,
    InputSelectComponent,
    InputSelectValueComponent,
    InputSelectParamComponent,
    InputSearchGoComponent,
    InputTextComponent,
    InputTextareaComponent,
    //InputTimepickerComponent,
    InputYearComponent,
    InputYmComponent,
    MenuComponent,
    SearchAllComponent,
    LabelComponent,
    FieldLabelComponent,
    FieldTreeLabelComponent,
    //DynamicTableComponent,
    LoginComponent,

    FieldLabelOrganoComponent,
    AfiliacionAdminComponent, AfiliacionFieldsetComponent,
    AfiliacionShowComponent, AfiliacionTableComponent, AfiliacionSearchComponent, AfiliacionSearchParamsComponent,
    ArchivoAfiliacionesCreateComponent, ArchivoAfiliacionesCreateFieldsetComponent,
    ArchivoAfiliacionesShowComponent, ArchivoAfiliacionesTableComponent,
    IaAfiliacionShowComponent, IaAfiliacionTableComponent, IaAfiliacionSearchComponent, IaAfiliacionSearchParamsComponent,
    PersonaAdminComponent, PersonaFieldsetComponent, PersonaAfiliacionTableComponent, 
    UploadInfoSueldosComponent, CreateInfoSueldosComponent, PTramiteExcepcionalTableComponent,
    TramiteExcepcionalAdminComponent, TramiteExcepcionalFieldsetComponent
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

    //ClipboardModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSortModule,
    //MatStepperModule,
    MatTableModule,
    MatToolbarModule,

    MaterialFileInputModule,
    //MatTimepickerModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000, verticalPosition:"top", horizontalPosition:"right"}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },

    DataDefinitionService, 
    SessionStorageService, 
    ValidatorsService,
    CookieService, 
    
    DataDefinitionStorageService, 
    DataDefinitionLabelService, 

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
