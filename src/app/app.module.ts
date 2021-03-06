import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {ClipboardModule} from '@angular/cdk/clipboard';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { MaterialFileInputModule } from 'ngx-material-file-input';

import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { ParserService } from '@service/parser/parser.service';
import { ValidatorsService } from '@service/validators/validators.service';

import { LabelPipe } from '@pipe/label.pipe';
import { ToDatePipe } from '@pipe/to-date.pipe';
import { ToTimePipe } from '@pipe/to-time.pipe';
import { SiNoPipe } from '@pipe/si-no.pipe';
import { StoragePipe } from '@pipe/storage.pipe';
import { SummaryPipe } from '@pipe/summary.pipe';

import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';

import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { InputAutocompleteComponent } from '@component/input-autocomplete/input-autocomplete.component';
import { InputSelectComponent } from '@component/input-select/input-select.component';
import { InputSearchGoComponent } from '@component/input-search-go/input-search-go.component';
import { MenuComponent } from '@component/menu/menu.component';
import { SearchAllComponent } from '@component/search-all/search-all.component';
import { LabelComponent } from '@component/label/label.component';

import { AfiliacionAdminComponent } from '@component/afiliacion-admin/afiliacion-admin/afiliacion-admin.component';
import { AfiliacionFieldsetComponent } from '@component/afiliacion-admin/afiliacion-fieldset/afiliacion-fieldset.component';

import { AfiliacionShowComponent } from '@component/afiliacion-show/afiliacion-show/afiliacion-show.component';
import { AfiliacionTableComponent } from '@component/afiliacion-show/afiliacion-table/afiliacion-table.component';
import { AfiliacionSearchComponent } from '@component/afiliacion-show/afiliacion-search/afiliacion-search.component';

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

export const APP_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,

    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,

    DialogAlertComponent,
    InputAutocompleteComponent,
    InputSelectComponent,
    InputSearchGoComponent,
    MenuComponent,
    SearchAllComponent,
    LabelComponent,

    AfiliacionAdminComponent, AfiliacionFieldsetComponent,
    AfiliacionShowComponent, AfiliacionTableComponent, AfiliacionSearchComponent, AfiliacionSearchParamsComponent,
    IaAfiliacionShowComponent, IaAfiliacionTableComponent, IaAfiliacionSearchComponent, IaAfiliacionSearchParamsComponent,
    PersonaAdminComponent, PersonaFieldsetComponent, PersonaAfiliacionTableComponent,
    UploadInfoSueldosComponent, CreateInfoSueldosComponent,
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

    ClipboardModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
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
    MatTableModule,
    MatToolbarModule,

    MaterialFileInputModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000, verticalPosition:"top", horizontalPosition:"right"}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},

    DataDefinitionService, 
    SessionStorageService, 
    ParserService, 
    ValidatorsService,
    
    DataDefinitionLoaderService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
