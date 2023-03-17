import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { GuestService } from '../shared/services/guest/guest.service';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    NgxIntlTelInputModule,
  ],
  exports: [RegisterComponent],
  providers: [GuestService]
})
export class RegisterModule { }
