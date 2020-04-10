import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalltxPageRoutingModule } from './calltx-routing.module';

import { CalltxPage } from './calltx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalltxPageRoutingModule
  ],
  declarations: [CalltxPage]
})
export class CalltxPageModule {}
