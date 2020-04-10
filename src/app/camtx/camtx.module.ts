import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamtxPageRoutingModule } from './camtx-routing.module';

import { CamtxPage } from './camtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamtxPageRoutingModule
  ],
  declarations: [CamtxPage]
})
export class CamtxPageModule {}
