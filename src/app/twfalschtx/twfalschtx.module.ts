import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwfalschtxPageRoutingModule } from './twfalschtx-routing.module';

import { TwfalschtxPage } from './twfalschtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwfalschtxPageRoutingModule
  ],
  declarations: [TwfalschtxPage]
})
export class TwfalschtxPageModule {}
