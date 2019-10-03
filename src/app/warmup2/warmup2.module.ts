import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { Warmup2Page } from './warmup2.page';

const routes: Routes = [
  {
    path: '',
    component: Warmup2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    RoundProgressModule
  ],
  declarations: [Warmup2Page]
})
export class Warmup2PageModule {}
