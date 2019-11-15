import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { BIndexComponent } from './b-index/b-index.component';


@NgModule({
  declarations: [BIndexComponent],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
