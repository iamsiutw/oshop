import { Component } from '@angular/core';
import {AuthService} from '../../../shared/service/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private auth: AuthService) { }

  login() {
    this.auth.login();
  }
}
