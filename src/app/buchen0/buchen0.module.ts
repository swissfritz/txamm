import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Buchen0PageRoutingModule } from './buchen0-routing.module';

import { Buchen0Page } from './buchen0.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Buchen0PageRoutingModule
  ],
  declarations: [Buchen0Page]
})
export class Buchen0PageModule {}
