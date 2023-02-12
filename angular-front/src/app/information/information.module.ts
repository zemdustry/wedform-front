import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InformationComponent } from '../information/components/information/information.component';

@NgModule({
  declarations: [InformationComponent],
  imports: [CommonModule, SharedModule],
  exports: [InformationComponent],
})
export class InformationModule {}
