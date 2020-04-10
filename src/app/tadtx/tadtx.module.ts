import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TadtxPageRoutingModule } from './tadtx-routing.module';

import { TadtxPage } from './tadtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TadtxPageRoutingModule
  ],
  declarations: [TadtxPage]
})
export class TadtxPageModule {}
