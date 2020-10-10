import {Cookies} from '../cookie/cookies';
import {CookieService} from 'ngx-cookie-service';

export class Session {

  private name: string;
  cookie = new Cookies();

  constructor(name: string) {
    this.name = name;
  }


  createSession(name: string, value: string) {
    this.cookie.setCookie('user', value, 30, '');
  }

  explodeSession() {
    return this.cookie.deleteCookie('user');
  }

  getToken() {
    return this.cookie.getCookie('user');
  }

  hasSession() {
    return this.cookie.getCookie('user') === '';
  }

}
