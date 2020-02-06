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

  objectAlliance:Object;
  objectPhilippines:Object;
  objectGreece:Object;

  allianceTimer = interval(1000).pipe(map((x) => {
    this.objectAlliance = this.getResultObject(this.allianceTime);
  }));

  philippinesTimer = interval(1000).pipe(map((x) => {
    this.objectPhilippines = this.getResultObject(this.philippinesTime);
  }));

  greeceTimer = interval(1000).pipe(map((x) => {
    this.objectGreece = this.getResultObject(this.greeceTime);
  }));

  // Helper methods
  getResultObject(time:DateTime){
    let toReturn = {};
    toReturn['DaysLeft'] = this.getDays(time);
    toReturn['HoursLeft'] = this.getHours(time);
    toReturn['MinutesLeft'] = this.getMinutes(time);
    toReturn['SecondsLeft'] = this.getSeconds(time);

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
