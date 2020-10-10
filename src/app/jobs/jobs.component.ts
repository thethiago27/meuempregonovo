import { Component, OnInit } from '@angular/core';
import {JobsService} from '../modules/jobs/jobs.service';
import {JobsInterface} from '../modules/jobs/jobs.interface';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.sass']
})
export class JobsComponent implements OnInit {

  jobsInfo: JobsInterface[];

  getJobs(): void {
    this.jobsService.getAll().subscribe(
      jobsService => this.jobsInfo = jobsService
    );
  }

  getJobById(): void {}

  constructor(
    private jobsService: JobsService
  ) { }

  ngOnInit(): void {
    this.getJobs();
  }

}
