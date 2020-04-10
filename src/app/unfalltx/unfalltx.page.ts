import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-unfalltx',
  templateUrl: './unfalltx.page.html',
  styleUrls: ['./unfalltx.page.scss'],
})
export class UnfalltxPage implements OnInit {

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

  sendMailT() {
    const email = {
      to: 'schaden@taxiwerbung.at',
      subject: 'Unfall',
      body: 'Meine Unfallfotos',
      attachments: this.imageList,
      isHtml: true
    };

    this.emailComposer.open(email);
  }
}

