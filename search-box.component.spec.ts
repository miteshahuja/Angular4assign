import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AfterViewInit, Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';

import { SearchBoxComponent } from './search-box.component';
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

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchBoxComponent
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
        MatGridListModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Search Box Component ', () => {
    expect(component).toBeTruthy();
  });

  it('should Show one way Tab on load ', () => {
    const tabGroup: MatTabsModule = component.tabGroup.selectedIndex;
    expect(tabGroup).toEqual(0);
  });

  it('should Match the input Object on click of Search Button ', () => { 
    let searchObj = {
      'origin' : 'PNQ',
      'destination' : 'IXC',
      'depDate' : '18/03/2018',
      'arrDate': '',
      'passengers': 2
    }
    component.origin = searchObj.origin;
    component.destination= searchObj.destination;
    component.depDate = searchObj.depDate;
    component.passengers =  searchObj.passengers;
    component.arrDateRet = searchObj.arrDate;

    let searchFormObject : FormControl = component.searchForm;
    component.submitSearch(searchFormObject);
    expect(component.searchDetails).toEqual(searchObj);
  });

  it('should Match the input Object on click of Search Button for return ', () => {
    component.refineSearch();
    expect(component.searchRefine).toEqual(50000);

  });

  it('should reset the data on click of reset button', () => {
    component.resetSearch();
    expect(component.searchRefine).toEqual(50000);
    expect(component.searchDetails).toEqual({});
  });
});
