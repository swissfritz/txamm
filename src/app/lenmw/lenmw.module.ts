import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LenmwPageRoutingModule } from './lenmw-routing.module';

import { LenmwPage } from './lenmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LenmwPageRoutingModule
  ],
  declarations: [LenmwPage]
})
export class LenmwPageModule {}
