import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LentxPageRoutingModule } from './lentx-routing.module';

import { LentxPage } from './lentx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LentxPageRoutingModule
  ],
  declarations: [LentxPage]
})
export class LentxPageModule {}
