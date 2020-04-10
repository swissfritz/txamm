import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call0mw',
  templateUrl: './call0mw.page.html',
  styleUrls: ['./call0mw.page.scss'],
})
export class Call0mwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mw() {
    this.router.navigateByUrl('/tabs/tab1/callmw');
  }

  ws() {
    this.router.navigateByUrl('/tabs/tab1/callwsmw');
  }
}
