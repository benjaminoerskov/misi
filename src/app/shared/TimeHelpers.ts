import { DateTime } from 'luxon';

export class TimeHelpers{

getResultObject(time:DateTime){
    let toReturn:TimeResult = {
      DaysLeft : this.getDays(time),
      HoursLeft:this.getHours(time),
      MinutesLeft : this.getMinutes(time),
      SecondsLeft:this.getSeconds(time),
      IsExpired:this.getExpired(time)
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
  getExpired(time:DateTime){
    return time.diffNow().as('seconds') < 0
  }
}