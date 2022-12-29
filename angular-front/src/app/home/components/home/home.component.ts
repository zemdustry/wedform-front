import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public HoursTensPlace: number = 0;
  public HoursOnesPlace: number = 0;
  public MinutesTensPlace: number = 0;
  public MinutesOnesPlace: number = 0;
  public SecondsTensPlace: number = 0;
  public SecondsOnesPlace: number = 0;
  ngOnInit() {

    setInterval
      (_ => {
        this.HoursTensPlace=Math.floor(Math.random() * 9) + 1;
        this.HoursOnesPlace=Math.floor(Math.random() * 9) + 1;
        this.MinutesTensPlace=Math.floor(Math.random() * 9) + 1;
        this.MinutesOnesPlace=Math.floor(Math.random() * 9) + 1;
        this.SecondsTensPlace=Math.floor(Math.random() * 9) + 1;
        this.SecondsOnesPlace=Math.floor(Math.random() * 9) + 1;

      }, 1000);

  }
}
