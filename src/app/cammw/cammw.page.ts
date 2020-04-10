import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cammw',
  templateUrl: './cammw.page.html',
  styleUrls: ['./cammw.page.scss'],
})
export class CammwPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigateByUrl('/tabs/tab1/infomw');
  }

}
