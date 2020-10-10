import {Component, OnInit} from '@angular/core';
import {Session} from '../modules/session/session';
import {Router} from '@angular/router';
import {User} from '../modules/user/user';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {

  session = new Session('user');
  user = new User('7384394394323');

  constructor(
    private router: Router
  ) {
  }

  select() {
    const header = document.getElementById('sidebar');
    const btns = header.getElementsByClassName('cydJK');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }


  ngOnInit(): void {

    const redirect = this.session.hasSession() ? '/login' : '/dashboard';

    this.router.navigate([redirect]);
    this.select();
  }

}
