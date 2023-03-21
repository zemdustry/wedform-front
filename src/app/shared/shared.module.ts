import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as sharedComponents from '.';
import { BendTitleBottomComponent } from './bend-title-bottom/bend-title-bottom.component';
import { BendTitleTopComponent } from './bend-title-top/bend-title-top.component';

@NgModule({
  declarations: [...sharedComponents.declarationComponents, BendTitleTopComponent, BendTitleBottomComponent],
  imports: [CommonModule, RouterModule],
  exports: [...sharedComponents.exportComponents]
})
export class SharedModule {
}
