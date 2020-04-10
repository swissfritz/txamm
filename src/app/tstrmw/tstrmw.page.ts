import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tstrmw',
  templateUrl: './tstrmw.page.html',
  styleUrls: ['./tstrmw.page.scss'],
})
export class TstrmwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/twmw');
  }
}
