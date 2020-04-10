import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwtxPageRoutingModule } from './twtx-routing.module';

import { TwtxPage } from './twtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwtxPageRoutingModule
  ],
  declarations: [TwtxPage]
})
export class TwtxPageModule {}
