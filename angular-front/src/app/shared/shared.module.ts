import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import * as sharedComponents from '.';

@NgModule({
  declarations: [...sharedComponents.declarationComponents],
  imports: [CommonModule, RouterModule, MatSlideToggleModule],
  exports: [...sharedComponents.exportComponents]
})
export class SharedModule { }
