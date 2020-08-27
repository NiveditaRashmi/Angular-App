import { Injectable } from '@angular/core';
import {Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(private eventService: EventService ){ }
  resolve () {
    // here map gives access to the events that are returned by getevents method
    // typically to get an obeservable we use subscribe which returns a subscription but here we need
    // observable to be returned so that we can watch out for what is returned. For this, we need to
    // return observable and so we use map whixh gives an obeservalbe.
    return this.eventService.getEvents().pipe(map(events => events ))
  }
}
