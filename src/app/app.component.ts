import { Component } from '@angular/core';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  norwayTime:Date;
  philippinesTime:Date;
  diff: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  countDownResult: number;

  constructor(){
    this.norwayTime = new Date(2020, 1, 29, 21, 40, 0, 0);
    this.philippinesTime = new Date(2020, 2, 26, 8, 25, 0, 0);

  //   Observable.interval(1000).map((x) => {
  //     this.diff = Math.floor((this.norwayTime.getTime() - new Date().getTime()) / 1000);
  // }).subscribe((x) => {           
  //     this.days = this.getDays(this.diff);
  //     this.hours = this.getHours(this.diff);
  //     this.minutes = this.getMinutes(this.diff);
  //     this.seconds = this.getSeconds(this.diff);
  // });
  }

  getDays(t){
    return Math.floor(t / 86400);
}

getHours(t){
    const days = Math.floor(t / 86400);
    t -= days * 86400;
    const hours = Math.floor(t / 3600) % 24;
    return hours;
}

getMinutes(t){
    const days = Math.floor(t / 86400);
    t -= days * 86400;
    const hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    const minutes = Math.floor(t / 60) % 60;
    return minutes;
}

getSeconds(t){
    const days = Math.floor(t / 86400);
    t -= days * 86400;
    const hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    const minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    const seconds = t % 60;
    return seconds;
}
}
