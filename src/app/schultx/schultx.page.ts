import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schultx',
  templateUrl: './schultx.page.html',
  styleUrls: ['./schultx.page.scss'],
})
export class SchultxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab2/infotx');
  }
}
