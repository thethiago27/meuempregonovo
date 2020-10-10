import { Component, OnInit } from '@angular/core';
import {Session} from '../modules/session/session';
import {User} from '../modules/user/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  session = new Session('user');
  user = new User(this.session.getToken());

  constructor() { }

  clearSession() {
    this.session.explodeSession();
  }

  setSession() {
    this.session.createSession('user', 'Thaifs');
  }

  ngOnInit(): void {}

}
