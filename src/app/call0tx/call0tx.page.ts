import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-call0tx',
  templateUrl: './call0tx.page.html',
  styleUrls: ['./call0tx.page.scss'],
})
export class Call0txPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  tx() {
    this.router.navigateByUrl('/tabs/tab2/calltx');
  }

  ws() {
    this.router.navigateByUrl('/tabs/tab2/callwstx');
  }
}
