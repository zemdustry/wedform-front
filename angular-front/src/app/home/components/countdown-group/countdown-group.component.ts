import { Component, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown-group',
  templateUrl: './countdown-group.component.html',
  styleUrls: ['./countdown-group.component.scss'],
})
export class CountdownGroupComponent implements OnDestroy {
  private subscription: Subscription;
  public timeDifference: number = 0;
  private readonly dDay: Date = new Date('Jun 17 2023 13:30:00');
  private readonly milliSecondsInASecond: number = 1000;
  private readonly hoursInADay: number = 24;
  private readonly minutesInAnHour: number = 60;
  private readonly SecondsInAMinute: number = 60;

  public secondsToDday: string;
  public minutesToDday: string;
  public hoursToDday: string;
  public daysToDday: string;
  //FIXME when days under 100
  public monthToDday: string;

  constructor() {
    //Time units
    this.secondsToDday = '0';
    this.minutesToDday = '0';
    this.hoursToDday = '0';
    this.daysToDday = '0';
    //FIXME when days under 100 show days
    this.monthToDday = '0';

    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
      console.log(this.daysToDday)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private getTimeDifference() {
    this.timeDifference = (this.dDay.getTime() -
      new Date().getTime()) as number;
    this.allocateTimeUnits();
  }

  private allocateTimeUnits() {
    this.secondsToDday =
      Math.floor(
        (this.timeDifference / this.milliSecondsInASecond) %
          this.SecondsInAMinute
      ).toString();
    this.minutesToDday =
      Math.floor(
        (this.timeDifference /
          (this.milliSecondsInASecond * this.minutesInAnHour)) %
          this.SecondsInAMinute
      ).toString();
    this.hoursToDday =
      Math.floor(
        (this.timeDifference /
          (this.milliSecondsInASecond *
            this.minutesInAnHour *
            this.SecondsInAMinute)) %
          this.hoursInADay
      ).toString();
    this.daysToDday =
      Math.floor(
        this.timeDifference /
          (this.milliSecondsInASecond *
            this.minutesInAnHour *
            this.SecondsInAMinute *
            this.hoursInADay)
      ).toString();
    //FIXME remove when days used
    this.monthToDday =
      Math.floor(
        this.timeDifference /
          (this.milliSecondsInASecond *
            this.minutesInAnHour *
            this.SecondsInAMinute *
            this.hoursInADay) /
          27
      ).toString();
  }
}
