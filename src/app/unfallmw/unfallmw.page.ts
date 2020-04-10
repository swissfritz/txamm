import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-unfallmw',
  templateUrl: './unfallmw.page.html',
  styleUrls: ['./unfallmw.page.scss'],
})
export class UnfallmwPage implements OnInit {

  image = null;
  img = null;
  imageList = [];

  constructor(
    public router: Router,
    private camera: Camera,
    private emailComposer: EmailComposer,
    private webview: WebView) { }

  ngOnInit() {
  }

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imagePath) => {
      this.image = this.webview.convertFileSrc(imagePath);
      this.img = imagePath;
      this.imageList.push(this.img);
    }, (err) => {
      // Handle error
      console.log('Aufnahmefehler: ', err);
    });
  }

  sendMailM() {
    const email = {
      to: 'schaden@taxoil.at',
      subject: 'Unfall',
      body: 'Meine Unfallfotos',
      attachments: this.imageList,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}
