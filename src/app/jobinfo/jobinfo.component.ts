import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JobsService} from '../modules/jobs/jobs.service';
import {JobsInterface} from '../modules/jobs/jobs.interface';
import {Session} from '../modules/session/session';
import {User} from "../modules/user/user";

@Component({
  selector: 'app-jobinfo',
  templateUrl: './jobinfo.component.html',
  styleUrls: ['./jobinfo.component.sass']
})
export class JobinfoComponent implements OnInit {

  jobInfo: JobsInterface[];

  private session = new Session('user');
  private user = new User(this.session.getToken());

  getById(): void {
    this.jobsService.getById(this.activatedRoute.snapshot.params.id).subscribe(
      jobService => this.jobInfo = jobService);
  }

  async submit(vaga: number) {

    const msg = this.session.hasSession() ? 'Faça login antes de continuar' : 'Parabéns, boa sorte em breve te avisaremos';

    const submt = await fetch('http://localhost:8700/jobs/submit', {
      method: 'POST',
      body: `userId=${this.user.getName()}&vagaId=${vaga}`
    });

    const resp = await submt.json();

    const toShow = resp.confirm ? 'Parábens gato' : `Você não tem os requisistos suficientes para se candidatar a essa vaga`;

    window.alert(toShow);

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobsService: JobsService,
  ) {
  }

  ngOnInit(): void {
    this.getById();
  }

}
