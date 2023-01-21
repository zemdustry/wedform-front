import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register.component';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
