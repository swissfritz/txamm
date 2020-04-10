import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camtx',
  templateUrl: './camtx.page.html',
  styleUrls: ['./camtx.page.scss'],
})
export class CamtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  con() {
    this.router.navigateByUrl('/tabs/tab2/camcon');
  }

  pr() {
    this.router.navigateByUrl('/tabs/tab2/campr');
  }
}
