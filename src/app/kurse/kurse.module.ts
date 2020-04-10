import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KursePageRoutingModule } from './kurse-routing.module';

import { KursePage } from './kurse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KursePageRoutingModule
  ],
  declarations: [KursePage]
})
export class KursePageModule {}
