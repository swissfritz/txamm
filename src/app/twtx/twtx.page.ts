import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twtx',
  templateUrl: './twtx.page.html',
  styleUrls: ['./twtx.page.scss'],
})
export class TwtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  dit() {
    this.router.navigateByUrl('/tabs/tab2/tdit');
  }

  adtx() {
    this.router.navigateByUrl('/tabs/tab2/tadtx');
  }

  strtx() {
    this.router.navigateByUrl('/tabs/tab2/tstrtx');
  }

  faltx() {
    this.router.navigateByUrl('/tabs/tab2/twfalschtx');
  }
}
