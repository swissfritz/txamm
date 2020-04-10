import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-infomw',
  templateUrl: './infomw.page.html',
  styleUrls: ['./infomw.page.scss'],
})
export class InfomwPage implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goCam() {
    this.router.navigateByUrl('/tabs/tab1/cammw');
  }

  goAus() {
    this.router.navigateByUrl('/tabs/tab1/polimw');
  }

  goKur() {
    this.router.navigateByUrl('/tabs/tab1/kurse');
  }

  goSchl() {
    this.router.navigateByUrl('/tabs/tab1/schul');
  }

  goWeb() {
    this.router.navigateByUrl('/tabs/tab1/austtmw');
  }
}
