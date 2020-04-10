import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfallmwPageRoutingModule } from './unfallmw-routing.module';

import { UnfallmwPage } from './unfallmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfallmwPageRoutingModule
  ],
  declarations: [UnfallmwPage]
})
export class UnfallmwPageModule {}
