import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TadmwPageRoutingModule } from './tadmw-routing.module';

import { TadmwPage } from './tadmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TadmwPageRoutingModule
  ],
  declarations: [TadmwPage]
})
export class TadmwPageModule {}
