import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import { interval } from 'rxjs';
import {map} from 'rxjs/operators';
import { TimeHelpers } from '../shared/TimeHelpers';

@Component({
  selector: 'app-benoslav',
  templateUrl: './benoslav.component.html',
  styleUrls: ['./benoslav.component.css']
})
export class BenoslavComponent {
  philippinesTime:DateTime = DateTime.fromObject({year:2020, day:26, month:2, hour:8, minute:25})
  greeceTime:DateTime = DateTime.fromObject({year:2020, day:29, month:4, hour:10, minute:35})
  karneTime:DateTime = DateTime.fromObject({year:2020, day:23, month:5, hour:7, minute:0})

  philippinesResult:TimeResult;
  greeceResult:TimeResult;
  karneResult:TimeResult;

  helper:TimeHelpers = new TimeHelpers;

  karneTimer = interval(1000).pipe(map((x) => {
    this.karneResult = this.helper.getResultObject(this.karneTime);
  }));

  philippinesTimer = interval(1000).pipe(map((x) => {
    this.philippinesResult = this.helper.getResultObject(this.philippinesTime);
  }));

  greeceTimer = interval(1000).pipe(map((x) => {
    this.greeceResult = this.helper.getResultObject(this.greeceTime);
  }));
}