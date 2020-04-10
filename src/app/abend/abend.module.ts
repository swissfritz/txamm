import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbendPageRoutingModule } from './abend-routing.module';

import { AbendPage } from './abend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbendPageRoutingModule
  ],
  declarations: [AbendPage]
})
export class AbendPageModule {}
