import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'home';

  constructor(private router: Router, private titleService: Title) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = event.url;
        this.titleService.setTitle($localize`${this.title}`);
      }
    });
  }
}
