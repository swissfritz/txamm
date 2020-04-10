import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-austttx',
  templateUrl: './austttx.page.html',
  styleUrls: ['./austttx.page.scss'],
})
export class AustttxPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goWeb() {
    const tb = this.iab.create('https://taxoil.at/');
  }
}
