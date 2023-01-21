import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import * as sharedComponents from '.'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [...sharedComponents.declarationComponents],
  imports: [CommonModule, RouterModule, MatSlideToggleModule],
  exports: [...sharedComponents.exportComponents]
})
export class SharedModule { }
