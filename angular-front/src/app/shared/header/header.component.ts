import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dDay: Date = new Date("06/17/2023");
  currentRoute: string = '/';

  constructor(private router: Router) {
    this.currentRoute = router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  public isActivesRoutes(...routes: string[]): boolean{
    return routes.some(route => route === this.currentRoute);
  }
}
