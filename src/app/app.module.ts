import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';
import { BackModule } from './back/back.module';
import { FrontModule } from './front/front.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FrontModule,
    BackModule,
    MainModule,
    LoginModule
  ],
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
