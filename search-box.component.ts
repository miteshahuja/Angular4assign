import {AfterViewInit, OnChanges, Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent{

  @Output() searchDetailsEmitter = new EventEmitter();
  @Output() refineSearchEmitter = new EventEmitter();

  cityCtrl: FormControl;
  dCityCtrl: FormControl;
  cityCtrlRet: FormControl;
  dCityCtrlRet: FormControl;
  depDateRetCtrl: FormControl;
  filteredCities: Observable<any[]>;
  filteredDestCities: Observable<any[]>;
  filteredCitiesRet: Observable<any[]>;
  filteredDestCitiesRet: Observable<any[]>;
  searchDetails = {};

  @ViewChild('tabGroup') tabGroup;
  @ViewChild('searchForm') searchForm;
  @ViewChild('searchFormRet') searchFormRet;

  origin: string;
  destination: string;
  depDate;
  passengers: number;
  originRet: string;
  destinationRet: string;
  depDateRet;
  arrDateRet;
  passengersRet: number;
  searchRefine: number = 50000;
  validForm: boolean = false;
  sliderMin: number = 2000;
  sliderMax: number = 50000;
  sliderStep: number = 10;
  sliderTickInterval = 20;

  cities = [
    {
      name: 'Pune',
      value: 'PNQ'
    },
    {
      name: 'Chandigarh',
      value: 'IXC'
    },
    {
      name: 'Ahmedabad',
      value: 'AMD'
    },
    {
      name: 'Delhi',
      value: 'DEL'
    }
  ];

  constructor() {
    this.cityCtrl = new FormControl();
    this.dCityCtrl = new FormControl();
    this.cityCtrlRet = new FormControl();
    this.dCityCtrlRet = new FormControl();
    this.depDateRetCtrl = new FormControl(new Date());
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );
    this.filteredDestCities = this.dCityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );
    this.filteredCitiesRet = this.cityCtrlRet.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );
    this.filteredDestCitiesRet = this.dCityCtrlRet.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this.filterCities(city) : this.cities.slice())
      );

      
  }


  submitSearch(searchFormObj) {
    if(this.tabGroup.selectedIndex) {
      this.searchDetails = {
        'origin': this.originRet,
        'destination': this.destinationRet,
        'depDate': this.depDateRet,
        'arrDate': this.arrDateRet,
        'passengers': this.passengersRet
      }
    } else {
      this.searchDetails = {
        'origin': this.origin,
        'destination': this.destination,
        'depDate': this.depDate,
        'arrDate': '',
        'passengers': this.passengers
      }
    }
    this.searchDetailsEmitter.emit(this.searchDetails);
  }

  resetSearch() {
    this.cityCtrl.reset('');
    this.dCityCtrl.reset('');
    this.cityCtrlRet.reset('');
    this.dCityCtrlRet.reset('');
    this.depDateRetCtrl.reset('');
    this.searchDetails = {};
    this.depDateRetCtrl.reset('');
    this.searchDetailsEmitter.emit(this.searchDetails);
    this.searchRefine = 50000 ;

  }
  

  refineSearch() {
    this.refineSearchEmitter.emit(this.searchRefine);
  }


  filterCities(name: string) {
    return this.cities.filter(city =>
      city.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }


}




class City {
  constructor(public name: string, public population: string, public flag: string) { }
}