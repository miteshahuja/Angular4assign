import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'

const TICKETS_API: string = "http://localhost:3004/tickets";
@Injectable()
export class MockService {

  constructor(private http: Http) { }

  getTickets() : Observable<any[]>{
    return this.http
      .get(TICKETS_API)
      .map(resp => resp.json());
  }
}

