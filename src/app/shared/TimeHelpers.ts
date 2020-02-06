import { DateTime } from 'luxon';
import { NestedTimeResult } from '../NestedTimeResult';
import { TimeResult } from '../TimeResult';


export class TimeHelpers{

    GetNestedResult(time:DateTime){
        let toReturn:NestedTimeResult = {
            
        }

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