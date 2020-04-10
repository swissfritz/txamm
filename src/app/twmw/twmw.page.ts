import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twmw',
  templateUrl: './twmw.page.html',
  styleUrls: ['./twmw.page.scss'],
})
export class TwmwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dim() {
    this.router.navigateByUrl('/tabs/tab1/tdim');
  }

  admw() {
    this.router.navigateByUrl('/tabs/tab1/tadmw');
  }

  strmw() {
    this.router.navigateByUrl('/tabs/tab1/tstrmw');
  }

  falmw() {
    this.router.navigateByUrl('/tabs/tab1/twfalschmw');
  }
}
