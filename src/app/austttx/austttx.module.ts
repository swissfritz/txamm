import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AustttxPageRoutingModule } from './austttx-routing.module';

import { AustttxPage } from './austttx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AustttxPageRoutingModule
  ],
  declarations: [AustttxPage]
})
export class AustttxPageModule {}
