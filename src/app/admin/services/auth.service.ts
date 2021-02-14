import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login = false;

  doLogin() {
    this.login = true;
  }

  doLogout() {
    this.login = false;
  }
}
