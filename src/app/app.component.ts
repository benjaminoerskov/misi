import { Component } from '@angular/core';
import { interval } from 'rxjs';
import {map} from 'rxjs/operators';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  norwayTime:DateTime = DateTime.fromObject({year:2020, day:29, month:1, hour:21, minute:40})
  philippinesTime:DateTime = DateTime.fromObject({year:2020, day:26, month:2, hour:8, minute:25})
  greeceTime:DateTime = DateTime.fromObject({year:2020, day:29, month:4, hour:14, minute:25})

  daysTillNorway: string;
  hoursTillNorway: string;
  minutesTillNorway: string;
  secondsTillNorway: string;

  daysTillPhilippines: string;
  hoursTillPhilippines: string;
  minutesTillPhilippines: string;
  secondsTillPhilippines: string;

  daysTillGreece: string;
  hoursTillGreece: string;
  minutesTillGreece: string;
  secondsTillGreece: string;

  norwayTimer = interval(1000).pipe(map((x) => {
    this.daysTillNorway = this.norwayTime.diffNow().toFormat('dd');
    this.hoursTillNorway =  (this.norwayTime.diffNow().as('hours')%24).toFixed(0);
    this.minutesTillNorway =  (this.norwayTime.diffNow().as('minutes')%60).toFixed(0);
    this.secondsTillNorway =  (this.norwayTime.diffNow().as('seconds')%60).toFixed(0);
    // return `${this.daysTillNorway} dage og ${this.hoursTillNorway} timer til launch baby`
  }));

  philippinesTimer = interval(1000).pipe(map((x) => {
    this.daysTillPhilippines = this.philippinesTime.diffNow().toFormat('dd');
    this.hoursTillPhilippines =  (this.philippinesTime.diffNow().as('hours')%24).toFixed(0);
    this.minutesTillPhilippines =  (this.philippinesTime.diffNow().as('minutes')%60).toFixed(0);
    this.secondsTillPhilippines =  (this.philippinesTime.diffNow().as('seconds')%60).toFixed(0);
    // return `${this.daysTillNorway} dage og ${this.hoursTillNorway} timer til launch baby`
  }));

  greeceTimer = interval(1000).pipe(map((x) => {
    this.daysTillGreece = this.greeceTime.diffNow().toFormat('dd');
    this.hoursTillGreece =  (this.greeceTime.diffNow().as('hours')%24).toFixed(0);
    this.minutesTillGreece =  (this.greeceTime.diffNow().as('minutes')%60).toFixed(0);
    this.secondsTillGreece =  (this.greeceTime.diffNow().as('seconds')%60).toFixed(0);
    // return `${this.daysTillNorway} dage og ${this.hoursTillNorway} timer til launch baby`
  }));

}
