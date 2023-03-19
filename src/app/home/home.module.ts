import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { CustomCountdownComponent } from './components/countdown-custom/countdown-custom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CountdownGroupComponent } from './components/countdown-group/countdown-group.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [HomeComponent, CustomCountdownComponent, CountdownGroupComponent, HeroComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [HomeComponent, CountdownGroupComponent]
})
export class HomeModule { }
