import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tstrtx',
  templateUrl: './tstrtx.page.html',
  styleUrls: ['./tstrtx.page.scss'],
})
export class TstrtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab2/twtx');
  }
}
