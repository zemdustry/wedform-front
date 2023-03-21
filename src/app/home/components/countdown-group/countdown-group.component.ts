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

  constructor() {
    //Time units
    this.secondsToDday = '0';
    this.minutesToDday = '0';
    this.hoursToDday = '0';
    this.daysToDday = '0';

    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
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
    this.secondsToDday = Math.floor((this.timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute)
      .toString();

      const currentMinutesToDay = Math.floor((this.timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) % this.SecondsInAMinute)
      .toString();
      if (currentMinutesToDay != this.minutesToDday) {
        this.minutesToDday = currentMinutesToDay;
      }

      const currentHoursToDday = Math.floor((this.timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute)) % this.hoursInADay)
      .toString();
      if (currentHoursToDday != this.hoursToDday) {
        this.hoursToDday = currentHoursToDday;
      }

      const currentDaysToDday = Math.floor(this.timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay))
      .toString();
      if (currentDaysToDday != this.daysToDday) {
        this.daysToDday = currentDaysToDday;
      }
  }
}
