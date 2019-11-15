import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainComponent } from './main/main.component';

const mainLayoutRoutes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'front',
    loadChildren: '../front/front.module#FrontModule',
  },
  {
    path: 'back',
    loadChildren: '../back/back.module#BackModule',
  }
];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule.forChild(mainLayoutRoutes)
  ]
})
export class MainModule { }
