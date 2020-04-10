import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfotxPageRoutingModule } from './infotx-routing.module';

import { InfotxPage } from './infotx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfotxPageRoutingModule
  ],
  declarations: [InfotxPage]
})
export class InfotxPageModule {}
