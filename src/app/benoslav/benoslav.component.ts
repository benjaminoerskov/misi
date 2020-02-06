import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { interval } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-benoslav',
  templateUrl: './benoslav.component.html',
  styleUrls: ['./benoslav.component.css']
})
export class BenoslavComponent {
  allianceTime:DateTime = DateTime.fromObject({year:2020, day:21, month:2, hour:17, minute:0})
  philippinesTime:DateTime = DateTime.fromObject({year:2020, day:26, month:2, hour:8, minute:25})
  greeceTime:DateTime = DateTime.fromObject({year:2020, day:29, month:4, hour:10, minute:35})

  allianceResult:TimeResult;
  philippinesResult:TimeResult;
  greeceResult:TimeResult;

  allianceTimer = interval(1000).pipe(map((x) => {
    this.allianceResult = this.getResultObject(this.allianceTime);
  }));

  philippinesTimer = interval(1000).pipe(map((x) => {
    this.philippinesResult = this.getResultObject(this.philippinesTime);
  }));

  greeceTimer = interval(1000).pipe(map((x) => {
    this.greeceResult = this.getResultObject(this.greeceTime);
  }));

  getResultObject(time:DateTime){
    let toReturn:TimeResult = {
      DaysLeft : this.getDays(time),
      HoursLeft:this.getHours(time),
      MinutesLeft : this.getMinutes(time),
      SecondsLeft:this.getSeconds(time)
    };
    
    return toReturn;
  }

  getDays(time:DateTime){
    return time.diffNow().toFormat('dd');
  }

  getHours(time:DateTime){
    return (time.diffNow().as('hours')%24).toFixed(0);
  }

  getMinutes(time:DateTime){
    return (time.diffNow().as('minutes')%60).toFixed(0)
  }

  getSeconds(time:DateTime){
    return (time.diffNow().as('seconds')%60).toFixed(0);
  }
}