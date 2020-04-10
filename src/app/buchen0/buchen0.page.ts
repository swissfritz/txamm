import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-buchen0',
  templateUrl: './buchen0.page.html',
  styleUrls: ['./buchen0.page.scss'],
})
export class Buchen0Page implements OnInit {

  public buchenForm: FormGroup;
  basinf = [];
  nomen: string;
  gla: string;
  sameCar: boolean;
  aca: string;
  callCar: boolean;
  aco: string;
  callColl: boolean;
  message: string;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {this.buchenForm = this.formBuilder.group({
    namen: ['', Validators.compose([Validators.required])
    ],
    sameCar: false,
    callCar: false,
    callColl: false
    });
  }

  ngOnInit() {
  }


  goNext() {
    this.nomen = this.buchenForm.value.namen;
    this.basinf.push(this.nomen);

    if (this.buchenForm.value.sameCar === true) {
      this.gla = 'JA';
    } else {
      this.gla = 'NEIN';
    }
    this.basinf.push(this.gla);

    if (this.buchenForm.value.callCar === true) {
      this.aca = 'JA';
    } else {
      this.aca = 'NEIN';
    }
    this.basinf.push(this.aca);

    if (this.buchenForm.value.callColl === true) {
      this.aco = 'JA';
    } else {
      this.aco = 'NEIN';
    }
    this.basinf.push(this.aco);

    console.log('basisinfo: ', this.basinf);

    const navex: NavigationExtras = {
      state: {
        bi: this.basinf
      }
    };
    this.router.navigate([`/tabs/tab2/buchen1`], navex);
  }
}