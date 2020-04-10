import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwmwPageRoutingModule } from './twmw-routing.module';

import { TwmwPage } from './twmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwmwPageRoutingModule
  ],
  declarations: [TwmwPage]
})
export class TwmwPageModule {}
