import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AktmwPageRoutingModule } from './aktmw-routing.module';

import { AktmwPage } from './aktmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AktmwPageRoutingModule
  ],
  declarations: [AktmwPage]
})
export class AktmwPageModule {}
