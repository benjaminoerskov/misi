import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { interval } from 'rxjs';
import {map} from 'rxjs/operators';
import { TimeHelpers } from '../shared/TimeHelpers';
import { TimeResult } from '../TimeResult';
import { NestedTimeResult } from '../NestedTimeResult';

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
  
  helper:TimeHelpers = new TimeHelpers;

  list:NestedTimeResult =  this.helper.getObservable(this.allianceTime, 'herpderp')

  allianceTimer = interval(1000).pipe(map((x) => {
    this.allianceResult = this.helper.getResultObject(this.allianceTime);
  }));

  philippinesTimer = interval(1000).pipe(map((x) => {
    this.philippinesResult = this.helper.getResultObject(this.philippinesTime);
  }));

  greeceTimer = interval(1000).pipe(map((x) => {
    this.greeceResult = this.helper.getResultObject(this.greeceTime);
  }));
}