import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TstrmwPageRoutingModule } from './tstrmw-routing.module';

import { TstrmwPage } from './tstrmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TstrmwPageRoutingModule
  ],
  declarations: [TstrmwPage]
})
export class TstrmwPageModule {}
