import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TditPageRoutingModule } from './tdit-routing.module';

import { TditPage } from './tdit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TditPageRoutingModule
  ],
  declarations: [TditPage]
})
export class TditPageModule {}
