import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolimwPageRoutingModule } from './polimw-routing.module';

import { PolimwPage } from './polimw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolimwPageRoutingModule
  ],
  declarations: [PolimwPage]
})
export class PolimwPageModule {}
