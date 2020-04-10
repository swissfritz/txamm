import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-anfmw',
  templateUrl: './anfmw.page.html',
  styleUrls: ['./anfmw.page.scss'],
})
export class AnfmwPage implements OnInit {
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

