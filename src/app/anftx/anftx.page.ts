import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-anftx',
  templateUrl: './anftx.page.html',
  styleUrls: ['./anftx.page.scss'],
})
export class AnftxPage implements OnInit {
  private map: any;
  private marker: any;

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 48.266512, lng: 16.449592 },
      zoom: 15
    });
    this.marker = new google.maps.Marker({
      position: { lat: 48.266512, lng: 16.449592 },
      map: this.map
    });
  }
}
