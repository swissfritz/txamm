import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-infotx',
  templateUrl: './infotx.page.html',
  styleUrls: ['./infotx.page.scss'],
})
export class InfotxPage implements OnInit {

  constructor(private router: Router, private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goCam() {
    this.router.navigateByUrl('/tabs/tab2/camtx');
  }

  goAus() {
    this.router.navigateByUrl('/tabs/tab2/poli');
  }

  goPark() {
    this.router.navigateByUrl('/tabs/tab2/park');
  }

  goWer() {
    this.router.navigateByUrl('/tabs/tab2/werpr');
  }

  goSchl() {
    this.router.navigateByUrl('/tabs/tab2/schultx');
  }

  goFar() {
    this.router.navigateByUrl('/tabs/tab2/txfahr');
  }

  goWeb() {
    this.router.navigateByUrl('/tabs/tab2/austttx');
  }
}
