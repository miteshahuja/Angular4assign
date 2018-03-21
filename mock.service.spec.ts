import { TestBed, inject } from '@angular/core/testing';

import { async, ComponentFixture } from '@angular/core/testing';

import {FormControl} from '@angular/forms';
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
import {MockService} from './mock.service';
import { HttpModule } from '@angular/http';

describe('MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
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
      providers: [MockService]
    });
  });

  it('should be created', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));
});
