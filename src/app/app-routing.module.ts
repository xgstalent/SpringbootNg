import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { 
    path: 'main',
    loadChildren: './main/main.module#MainModule' 
  },
  { 
    path: 'login',
    loadChildren: './login/login.module#LoginModule' 
  },
  //这是一定要放在最后面，有东西往前加
  // { path: '**', redirectTo: '/main/errorPage/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],//把路由配置注入
  exports: [RouterModule]
})
export class AppRoutingModule { }
