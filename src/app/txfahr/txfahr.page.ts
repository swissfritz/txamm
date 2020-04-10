import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-txfahr',
  templateUrl: './txfahr.page.html',
  styleUrls: ['./txfahr.page.scss'],
})
export class TxfahrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goProz() {
    this.router.navigateByUrl('/tabs/tab2/proz');
  }

  goPau() {
    this.router.navigateByUrl('/tabs/tab2/pausch');
  }

  goPpau() {
    this.router.navigateByUrl('/tabs/tab2/ppau');
  }

  goGeh() {
    this.router.navigateByUrl('/tabs/tab2/gehalt');
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab2/infotx');
  }
}
