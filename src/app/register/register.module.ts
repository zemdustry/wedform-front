import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { GuestService } from '../shared/services/guest/guest.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({ declarations: [RegisterComponent],
    exports: [RegisterComponent], imports: [CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        SharedModule,
        NgxIntlTelInputModule], providers: [GuestService, provideHttpClient(withInterceptorsFromDi())] })
export class RegisterModule { }
