import { Component } from '@angular/core';
import {Observable, interval } from 'rxjs';
import {map} from 'rxjs/operators';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  norwayTime:DateTime =   DateTime.fromObject({year:2020, day:29, month:1, hour:21, minute:40})
  philippinesTime:Date;
  diff: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  countDownResult: number;
  foo = interval(1000).pipe(map((x) => {
    const days = this.norwayTime.diffNow().toFormat('dd');
    const hours =  this.norwayTime.diffNow().as('hours');
    return `${days} dage og ${(hours%24).toFixed(0)} timer til launch baby`
  }));

}
