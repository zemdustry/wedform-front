import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, SimpleChanges } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-countdown-custom',
  templateUrl: './countdown-custom.component.html',
  styleUrls: ['./countdown-custom.component.scss'],
  //TODO set flipclock animation for top and bottom palette
  animations: [
    trigger('flipTop', [
      transition('* => *', [
        animate('500ms 500ms cubic-bezier(.37,.01,.94,.35)', keyframes([
          style({
            transformOrigin: 'center bottom',
            transform: 'rotateX(0deg)',
            opacity: 0.99,
            zIndex: 2
          }),
          style({
            transform: 'rotateX(-90deg)',
            opacity: 0
          })
        ]))
      ])
    ]),
    trigger('flipBottom', [
      transition('* => *', [
        animate('500ms 900ms cubic-bezier(.17,.67,.2,1.12)',
          keyframes([
            style({
              transformOrigin: 'center top',
              transform: 'rotateX(90deg)',
              opacity: 0,
              zIndex: -1,
              offset: 0
            }),
            style({
              transform: 'rotateX(0deg)',
              opacity: 0.99,
              zIndex: 5,
              offset: 1
            })
          ])
        )
      ])
    ]),
    trigger("flip",[
      transition('*=>*',[
      animate(".7s",keyframes([
        style({transform:"rotateX(0deg)",offset: 0}),
        style({transform:"rotateX(-90deg)",offset: .5}),
        style({transform:"rotateX(-180deg)",offset: 1}),
      ]))
    ])
  ])
  ]
})

export class CustomCountdownComponent {

  @Input()
  public value : number;
  public currentValue: number;
  public lastValue: number;


  constructor() {
    this.value = 0;
    this.currentValue = 0;
    this.lastValue = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("before")
    console.log(this.lastValue)
    console.log(this.currentValue)
    this.lastValue = this.currentValue;
    this.currentValue = this.value;
    console.log("after")
    console.log(this.lastValue)
    console.log(this.currentValue)
  }

  public transformTime(time: number) : string {
    if (time < 10) {
      return String('0' + time);
    }
    return String(time);
  }
}
