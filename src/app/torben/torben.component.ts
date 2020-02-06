import { Component } from '@angular/core';
import { DateTime } from 'luxon';
import { TimeHelpers } from '../shared/TimeHelpers';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-torben',
  templateUrl: './torben.component.html',
  styleUrls: ['./torben.component.css']
})
export class TorbenComponent{
  greeceTime:DateTime = DateTime.fromObject({year:2020, day:28, month:5, hour:7, minute:0})

  greeceResult:TimeResult;

  helper:TimeHelpers = new TimeHelpers;

  greeceTimer = interval(1000).pipe(map((x) => {
    this.greeceResult = this.helper.getResultObject(this.greeceTime);
  }));

}
