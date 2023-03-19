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
        this.updateTitle(event.url);
      }
    });
  }

  private updateTitle(currentRoute: string) {
    this.title = currentRoute.substring(1, currentRoute.length);
    this.titleService.setTitle($localize`${this.title}`);
  }
}
