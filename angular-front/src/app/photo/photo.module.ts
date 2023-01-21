import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PhotoComponent } from './components/photo.component';


@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PhotoComponent]
})
export class PhotoModule { }
