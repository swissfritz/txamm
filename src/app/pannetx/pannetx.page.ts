import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pannetx',
  templateUrl: './pannetx.page.html',
  styleUrls: ['./pannetx.page.scss'],
})
export class PannetxPage implements OnInit {

  message: string;
  lang: string;
  breit: string;
  mod: string;
  zul: string;
  stao: string;
  tel: string;

  constructor(private emailComposer: EmailComposer,
              private geo: Geolocation,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
  }

  async getLocT() {

    await this.geo.getCurrentPosition().then((resp) => {
      this.breit = resp.coords.latitude.toString();
      this.lang = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.sendMT();
  }

  async getLocationT() {

    await this.geo.getCurrentPosition().then((resp) => {
      this.breit = resp.coords.latitude.toString();
      this.lang = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.sendMailT();
  }

  async sendMT() {
    await this.geo.getCurrentPosition().then((resp) => {
      this.breit = resp.coords.latitude.toString();
      this.lang = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.message = 'geogr. Breite: ' + this.breit + '<br>' + 'geogr. Länge: ' + this.lang;
    const email = {
      to: 'panne@taxiwerbung.at',
      subject: 'Panne: Koordinaten',
      body: this.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  async sendMailT() {
    await this.geo.getCurrentPosition().then((resp) => {
      this.breit = resp.coords.latitude.toString();
      this.lang = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    this.message = 'Panne Standort: ' + this.stao + '<br>' +
     'Kennzeichen: ' + this.zul + '<br><br>' + 'geogr. Breite: ' + this.breit + '<br>' + 'geogr. Länge: ' + this.lang;
    const email = {
      to: 'panne@taxiwerbung.at',
      subject: 'Wagen nicht fahrbar - Pannendreieck im Heckfenster!',
      body: this.message,
      isHtml: true
    };
    this.emailComposer.open(email);
  }
}

