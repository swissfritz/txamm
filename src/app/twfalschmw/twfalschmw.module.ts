import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwfalschmwPageRoutingModule } from './twfalschmw-routing.module';

import { TwfalschmwPage } from './twfalschmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwfalschmwPageRoutingModule
  ],
  declarations: [TwfalschmwPage]
})
export class TwfalschmwPageModule {}
