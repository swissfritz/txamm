import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unfmtx',
  templateUrl: './unfmtx.page.html',
  styleUrls: ['./unfmtx.page.scss'],
})
export class UnfmtxPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goUnfall() {
    this.router.navigateByUrl('/tabs/tab2/unfalltx');
  }
}
