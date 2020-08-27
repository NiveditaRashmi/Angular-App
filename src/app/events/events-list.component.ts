import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
// import { ToastrService } from '../common/toastr.service';
import { observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';

// This is a global variable and since it is not injected, it cannot be tested
// declare let toastr
@Component({
  // selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListsComponent implements OnInit {
  events: IEvent[];
  // events: any[];
  constructor(private eventService: EventService,
      private route: ActivatedRoute ) {

  }

  ngOnInit() {
    // the events inside colon will match the one written inside resolve of this.route.ts class
    this.events = this.route.snapshot.data['events'];

    // In order to get data from observable we need to subscribe to it
    // this.eventService.getEvents().subscribe( events => { this.events = events });

    // tthis was used when eventservice returned the actual data
    // this.events = this.eventService.getEvents();
  }

  // handleThumbnailClick(eventName) {
  //   this.toastr.success(eventName);
  // }

}
