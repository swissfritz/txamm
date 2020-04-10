import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchultxPageRoutingModule } from './schultx-routing.module';

import { SchultxPage } from './schultx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchultxPageRoutingModule
  ],
  declarations: [SchultxPage]
})
export class SchultxPageModule {}
