import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navBar.component';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.component';
import {
  EventThumbnailComponent,
  EventDetailsComponent,
  EventListResolver,
  EventsListComponent,
  EventService,
  CreateEventComponent,
  EventResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidatorDirective
} from './events/index';
import {JQ_TOKEN, CollapsibleWellComponent, ToastrService, SimpleModalComponent, ModalTriggerDirective } from './common/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let JQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    DurationPipe,
    Error404Component,
    ModalTriggerDirective,
    LocationValidatorDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventResolver,
    AuthService,
    VoterService,
    { provide: JQ_TOKEN, useValue: JQuery },
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel it?');
  }
  return true;
}
