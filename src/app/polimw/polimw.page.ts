import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-polimw',
  templateUrl: './polimw.page.html',
  styleUrls: ['./polimw.page.scss'],
})
export class PolimwPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/infomw');
  }
}
