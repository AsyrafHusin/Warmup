import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Warmup4Page } from './warmup4.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

const routes: Routes = [
  {
    path: '',
    component: Warmup4Page
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
  declarations: [Warmup4Page]
})
export class Warmup4PageModule {}
