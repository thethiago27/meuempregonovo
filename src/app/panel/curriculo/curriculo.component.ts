import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.sass']
})
export class CurriculoComponent implements OnInit {

  kld = new FormGroup({
    nome: new FormControl(''),
    telephone: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    birthday: new FormControl(''),
    rg: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
