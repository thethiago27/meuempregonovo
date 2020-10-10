import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Session} from '../modules/session/session';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  session = new Session('user');

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  form = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    birthday: new FormControl(''),
    cpf: new FormControl('')
  });

  get f() {

    return this.form.controls;

  }

  submit() {

    const formL = `name=${this.f.name.value}&email=${this.f.email.value}&password=${this.f.password.value}&phone=${this.f.phone.value}&birthday=${this.f.birthday.value}&cpf=${this.f.cpf.value}`;

    const header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    fetch(`http://localhost:8700/register`, {
      method: 'POST',
      headers: header,
      body: formL
    });

  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const redirect = this.session.hasSession() ? '/register' : '/dashboard';

    this.router.navigate([redirect]);
  }

}
