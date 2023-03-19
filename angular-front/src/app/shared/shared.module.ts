import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import * as sharedComponents from '.';
import { AgePipe } from './pipes/age-pipe';
import { BendTitleTopComponent } from './bend-title-top/bend-title-top.component';
import { BendTitleBottomComponent } from './bend-title-bottom/bend-title-bottom.component';

@NgModule({
  declarations: [...sharedComponents.declarationComponents, BendTitleTopComponent, BendTitleBottomComponent],
  imports: [CommonModule, RouterModule, MatSlideToggleModule],
  exports: [...sharedComponents.exportComponents]
})
export class SharedModule {
}
