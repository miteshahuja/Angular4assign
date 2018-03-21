import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
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
import {MockService} from '../mock.service';
import { HttpModule } from '@angular/http';
import { Mock } from 'protractor/built/driverProviders';
import * as ticketsMock from '../../assets/ticketsData.json';
describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
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
      providers: [
        MockService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Ticket Component', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));

  it('should show PNQ - IXC -PNQ tickets', inject([MockService], (service: MockService) => {
    let searchObj = {
      'origin' : 'PNQ',
      'destination' : 'IXC',
      'depDate' : '18/03/2018',
      'arrDate': '21/03/2018',
      'passengers': 2
    }

    component.searchDetail = searchObj;
    component.ticketDetails = (<any>ticketsMock).tickets;
    component.initiateData();
    expect(component.departingFlights.length).toEqual(2);
    expect(component.arrivingFlights.length).toEqual(2);
  }));

  it('should filter data by price on slider movement to max 12000', () => {
    component.refineSearch = 12000;
    let searchObj = {
      'origin' : 'PNQ',
      'destination' : 'IXC',
      'depDate' : '18/03/2018',
      'arrDate': '21/03/2018',
      'passengers': 2
    }

    component.searchDetail = searchObj;
    component.ticketDetails = (<any>ticketsMock).tickets;
    component.initiateData();
    expect(component.departingFlights.length).toEqual(0);
    expect(component.arrivingFlights.length).toEqual(1);
  });
});
