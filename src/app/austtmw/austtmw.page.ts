import { Component, OnInit } from '@angular/core';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-austtmw',
  templateUrl: './austtmw.page.html',
  styleUrls: ['./austtmw.page.scss'],
})
export class AusttmwPage implements OnInit {

  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }

  goWeb() {
    const tb = this.iab.create('https://taxoil.at/');
  }

}
