import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abend',
  templateUrl: './abend.page.html',
  styleUrls: ['./abend.page.scss'],
})
export class AbendPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/infomw');
  }

}
