import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallwstxPageRoutingModule } from './callwstx-routing.module';

import { CallwstxPage } from './callwstx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallwstxPageRoutingModule
  ],
  declarations: [CallwstxPage]
})
export class CallwstxPageModule {}
