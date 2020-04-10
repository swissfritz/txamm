import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twfalschtx',
  templateUrl: './twfalschtx.page.html',
  styleUrls: ['./twfalschtx.page.scss'],
})
export class TwfalschtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab2/twtx');
  }
}
