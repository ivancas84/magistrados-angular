import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MAT_DATE_LOCALE } from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

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

import { DialogAlertComponent } from '@component/dialog-alert/dialog-alert.component';
import { InputAutocompleteComponent } from '@component/input-autocomplete/input-autocomplete.component';
import { InputSelectComponent } from '@component/input-select/input-select.component';

import { DataDefinitionLoaderService } from '@service/data-definition-loader.service';
import { MenuComponent } from '@component/menu/menu.component';

import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaFieldsetComponent } from '@component/persona-admin/persona-fieldset/persona-fieldset.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,

    LabelPipe, ToDatePipe, ToTimePipe, SiNoPipe, SummaryPipe, StoragePipe,

    DialogAlertComponent,
    InputAutocompleteComponent,
    InputSelectComponent,
    MenuComponent,

    PersonaAdminComponent, PersonaFieldsetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000, verticalPosition:"top", horizontalPosition:"right"}},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {provide: MAT_DATE_LOCALE, useValue: 'es-AR' },

    DataDefinitionService, 
    SessionStorageService, 
    ParserService, 
    ValidatorsService,
    
    DataDefinitionLoaderService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
