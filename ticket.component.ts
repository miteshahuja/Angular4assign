import { Component, Input, OnChanges} from '@angular/core';
import * as _ from 'lodash';
import {MockService} from '../mock.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnChanges {

  @Input() searchDetail;

  @Input() refineSearch: number = 50000;

  departingFlights = [];
  arrivingFlights = [];
  ticketDetails:any [];
  tickets : any[];
  showData: boolean = false;
  searchStart: boolean = false;
  Message: string = "Find flights between Pune - Chandigarh - Delhi - Ahmedabad";

  constructor(public mockService: MockService) { }

  ngOnChanges() {
    this.getTickets();
    this.initiateData();
  }

  initiateData() {
    

    if (!_.isEmpty(this.searchDetail)) {
      this.searchStart = true;
      this.departingFlights = [];
      this.arrivingFlights = [];
      for (let i = 0; i < this.ticketDetails.length; i++) {
        if (this.ticketDetails[i]['origin'] === this.searchDetail.origin && this.ticketDetails[i]['destination'] === this.searchDetail.destination && (parseInt(this.ticketDetails[i].rate) * this.searchDetail.passengers )<= this.refineSearch) {
          this.departingFlights.push(this.ticketDetails[i]);
        }
      }

      if(this.searchDetail.arrDate !== '' ) {
        for (let i = 0; i < this.ticketDetails.length; i++) {
          if(this.ticketDetails[i]['origin'] === this.searchDetail.destination && this.ticketDetails[i]['destination'] === this.searchDetail.origin && (parseInt(this.ticketDetails[i].rate) * this.searchDetail.passengers )<= this.refineSearch) {
            this.arrivingFlights.push(this.ticketDetails[i]);
          }
        }
      }
      this.showData = true;
    } else {
      this.searchStart = false;
      this.departingFlights = [];
      this.arrivingFlights = [];

      this.showData = true;

    }
  }

  getTickets() {
    this.mockService.getTickets()
      .subscribe(
        tickets => {
          this.ticketDetails = tickets;
        }
        
      );
  }
}
