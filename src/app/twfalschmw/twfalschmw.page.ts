import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-twfalschmw',
  templateUrl: './twfalschmw.page.html',
  styleUrls: ['./twfalschmw.page.scss'],
})
export class TwfalschmwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/twmw');
  }
}
