import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {JobsService} from '../modules/jobs/jobs.service';
import {JobsInterface} from '../modules/jobs/jobs.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  jobsInfo: JobsInterface[];

  form = new FormGroup({
    job: new FormControl(''),
    city: new FormControl(''),
  });

  search() {
    this.router.navigate(['search', this.form.value.job, this.form.value.city]);
  }

  getAmountJobs() {
    this.jobs.getAll().subscribe(
      jobsService => this.jobsInfo = jobsService
    );
  }

  constructor(
    private router: Router,
    private jobs: JobsService
  ) { }

  ngOnInit(): void {
    this.getAmountJobs();
  }

}
