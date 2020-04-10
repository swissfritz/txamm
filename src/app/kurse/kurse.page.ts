import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kurse',
  templateUrl: './kurse.page.html',
  styleUrls: ['./kurse.page.scss'],
})
export class KursePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTg() {
    this.router.navigateByUrl('/tabs/tab1/tag');
  }

  goAb() {
    this.router.navigateByUrl('/tabs/tab1/abend');
  }
}
