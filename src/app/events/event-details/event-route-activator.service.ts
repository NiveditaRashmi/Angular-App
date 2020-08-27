// This is a routeguard Service file
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';


@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) { }
  // tslint:disable-next-line: typedef
  canActivate(route: ActivatedRouteSnapshot){
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if ( !eventExists )
      this.router.navigate(['/404'] );
    return eventExists
  }
}
