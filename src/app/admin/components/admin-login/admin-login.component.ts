import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent {
  constructor(private authService: AuthService) {}

  username: String = 'admin';
  password: String = '123456';

  login() {
    this.authService.doLogin();
  }
}
