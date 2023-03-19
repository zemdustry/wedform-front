import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { InformationModule } from './information/information.module';
import { HomeModule } from './home/home.module';
import { RegisterModule } from './register/register.module';
import { PhotoModule } from './photo/photo.module';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NotificationService } from './shared/services/notification/notification.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    RegisterModule,
    HomeModule,
    InformationModule,
    PhotoModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
