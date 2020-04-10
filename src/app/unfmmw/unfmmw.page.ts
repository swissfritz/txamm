import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unfmmw',
  templateUrl: './unfmmw.page.html',
  styleUrls: ['./unfmmw.page.scss'],
})
export class UnfmmwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goUnfall() {
    this.router.navigateByUrl('/tabs/tab1/unfallmw');
  }
}
