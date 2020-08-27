import { Component, Input } from '@angular/core';
import { IEvent } from './shared/event.model';


@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class ="well hoverwell thumbnail">
    <h2>{{event?.name | uppercase}}</h2>
    <div>Date: {{event?.date | date:'shortDate'}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
    Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Price: \${{event?.price}}</div>
    <div *ngIf="event?.location">
      <span>Location: {{event?.location.address}}</span>
      <span>&nbsp;</span>
      <span>{{event?.location.city}}, {{event?.location.country}}</span>
    </div>
    <!-- <div [hidden]="!event?.onlineUrl"> -->
    <div *ngIf="!event?.onlineUrl">
      Online URL: {{event?.onlineUrl }}
    </div>
  </div>
  `,
  styles: [`
    .green { color: #003300 !important }
    .bold { font-weight: bold; }
    .thumbnail { min-height: 210px; }
  `]
})

export class EventThumbnailComponent {
  // here input tells that this event variable will come as input from some other component
  @Input() event: IEvent;

  getStartTimeClass(): any {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return { green: isEarlyStart, bold: isEarlyStart }
    if (this.event && this.event.time === '8:00 am') {
      return ['green bold'] ; }
    return [];
  }

}
