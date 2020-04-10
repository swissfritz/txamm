import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TstrtxPageRoutingModule } from './tstrtx-routing.module';

import { TstrtxPage } from './tstrtx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TstrtxPageRoutingModule
  ],
  declarations: [TstrtxPage]
})
export class TstrtxPageModule {}
