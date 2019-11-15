import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private message: NzMessageService,
    private router: Router ) { }

  ngOnInit() {
  }

  login(code) {
    this.message.success('登录成功');
    if(code === '1') {
      this.router.navigate(['/main/front']);
    } else {
      this.router.navigate(['/main/back']);
    }
  }

}
