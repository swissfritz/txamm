import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnfmmwPageRoutingModule } from './unfmmw-routing.module';

import { UnfmmwPage } from './unfmmw.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnfmmwPageRoutingModule
  ],
  declarations: [UnfmmwPage]
})
export class UnfmmwPageModule {}
