import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { StartTimerPage } from './start-timer.page';

const routes: Routes = [
  {
    path: '',
    component: StartTimerPage
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
  declarations: [StartTimerPage]
})
export class StartTimerPageModule {}
