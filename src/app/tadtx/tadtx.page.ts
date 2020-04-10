import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tadtx',
  templateUrl: './tadtx.page.html',
  styleUrls: ['./tadtx.page.scss'],
})
export class TadtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab2/twtx');
  }
}
