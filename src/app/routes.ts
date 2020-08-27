import { Routes } from '@angular/router';
import { EventsListsComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { CreateSessionComponent } from './events/event-details/create-session.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivteCreateEvent'] },
  { path: 'events', component: EventsListsComponent, resolve: { events: EventListResolver}},
  { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent},
  { path: '404', component: Error404Component},
  // This is how we load component from another module.
  { path: 'user', loadChildren: './user/user.module#UserModule'}

];
