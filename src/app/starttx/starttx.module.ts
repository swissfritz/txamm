import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StarttxPageRoutingModule } from './starttx-routing.module';

import { StarttxPage } from './starttx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarttxPageRoutingModule
  ],
  declarations: [StarttxPage]
})
export class StarttxPageModule {}
