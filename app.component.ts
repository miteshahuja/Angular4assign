import { Component } from '@angular/core';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
  searchSet ={};
  refineSearchValue: number = 50000;
  getSearchDetail(event) {
    this.searchSet = event;
  }
  getRefineSearch(event) {
    this.refineSearchValue = event;
  }
}
