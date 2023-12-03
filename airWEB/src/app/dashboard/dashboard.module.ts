import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { RegionsComponent } from './regions/regions.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: []
})
export class DashboardModule { }
