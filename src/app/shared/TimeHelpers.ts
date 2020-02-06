import { DateTime } from 'luxon';
import { NestedTimeResult } from '../NestedTimeResult';
import { TimeResult } from '../TimeResult';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


export class TimeHelpers{
    getObservable(time:DateTime, name:string){
      let result:TimeResult;
      let obs = interval(1000).pipe(map((x) => {
        result = this.getResultObject(time);
      }));

      let toReturn: NestedTimeResult = {
        Name:name,
        Result:this.getResultObject(time),
        Observable:obs
      }
console.log(toReturn)
      return toReturn;
    }

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