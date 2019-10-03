import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Warmup6Page } from './warmup6.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

const routes: Routes = [
  {
    path: '',
    component: Warmup6Page
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
  declarations: [Warmup6Page]
})
export class Warmup6PageModule {}
