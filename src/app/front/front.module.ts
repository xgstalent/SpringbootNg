import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    NgZorroAntdModule,
    FormsModule,
  ],
  exports: [
    IndexComponent
  ]
})
export class FrontModule { }
