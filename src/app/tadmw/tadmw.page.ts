import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tadmw',
  templateUrl: './tadmw.page.html',
  styleUrls: ['./tadmw.page.scss'],
})
export class TadmwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/twmw');
  }
}
