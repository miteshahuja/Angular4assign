import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule, MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button'
import {MatSliderModule} from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

import { HttpModule } from '@angular/http';
import {MockService} from './mock.service';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatTabsModule,
    MatGridListModule,
    HttpModule
  ],
  providers: [ MockService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
