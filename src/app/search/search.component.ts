import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  public city = this.activatedRoute.snapshot.params.job;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

}
