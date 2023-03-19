import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  dDay: Date = new Date("06/17/2023");

  CBirthDay: Date = new Date(1993, 11, 7);
  HBirthDay: Date = new Date(1992, 3, 2);

  constructor() { }

  ngOnInit(): void {
  }

}
