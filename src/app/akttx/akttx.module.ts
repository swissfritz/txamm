import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AkttxPageRoutingModule } from './akttx-routing.module';

import { AkttxPage } from './akttx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AkttxPageRoutingModule
  ],
  declarations: [AkttxPage]
})
export class AkttxPageModule {}
