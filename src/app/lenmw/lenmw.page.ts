import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lenmw',
  templateUrl: './lenmw.page.html',
  styleUrls: ['./lenmw.page.scss'],
})
export class LenmwPage implements OnInit {

  constructor(
    private alertCtrl: AlertController,
    private iab: InAppBrowser,
    private router: Router
    ) { }

  ngOnInit() {
  }

  async opnLeuchten() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Am Armaturenbrett leuchtet ROTE Warnung:</strong><br><br>Bitte Motor abstellen und nicht mehr starten! Zum Menupunkt Panne gehen.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnUnfall() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Unfall:</strong><br><br>Bitte zum Menupunkt Unfall gehen.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnBusse() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Bußgelder</strong><br><br>Bitte Anonymverfügung bezahlen. Lenkerauskunft Euro 18,-- plus die eigentliche Buße',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  opnSb() {
    let mb = this.iab.create('https://taxoil.at/lenker.html');
  }

  async opnZusatz() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Zusatzeinbauten:</strong><br><br>Zusatzeinbauten nur in unserer Werkstätte!',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnRauch() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Rauchverbot:</strong><br><br>Wenn in Ihrem Mietwagen geraucht wird, wird es für Sie teuer!',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }

  async opnBruch() {
    const alert = await this.alertCtrl.create({
      message: '<strong>Einbruch</strong><br><br>Nichts im Wagen liegen lassen, auch nicht für 2 Minuten, Taxieinbrecher sind darauf spezielisiert! Zu Ihrer fehlenden Brieftasche kommt noch die Scheibe dazu.',
      buttons: ['Schließen'],
      cssClass: 'alm'
    });
    await alert.present();
  }
}
