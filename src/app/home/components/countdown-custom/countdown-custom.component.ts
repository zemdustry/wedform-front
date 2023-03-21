import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-countdown-custom',
  templateUrl: './countdown-custom.component.html',
  styleUrls: ['./countdown-custom.component.scss']
})

export class CustomCountdownComponent {

  @Input()
  public value : number;
  @Input()
  public isNotSeconds: boolean;
  public currentValue: number;
  public lastValue: number;


  constructor() {
    this.value = 0;
    this.currentValue = 0;
    this.lastValue = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
      this.lastValue = this.currentValue;
      this.currentValue = this.value;
  }

  public transformTime(time: number) : string {
    if (time < 10) {
      return String('0' + time);
    }
    return String(time);
  }
}
