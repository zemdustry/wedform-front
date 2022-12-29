import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, Input, SimpleChanges } from '@angular/core';

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
        animate('500ms 900ms cubic-bezier(.15,.45,.28,1)',
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
    ])
  ]
})

export class CustomCountdownComponent {

  @Input()
  public unit : string;
  public lastUnit: string;

  constructor() {
    this.unit = '0';
    this.lastUnit = '0';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.lastUnit = this.unit;
    this.unit = this.transformTime(changes["unit"].currentValue);
  }

  private transformTime(time: number) : string {
    if (time < 10) {
      return String('0' + time);
    }
    return String(time);
  }
}
