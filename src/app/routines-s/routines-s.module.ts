import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoutinesSPage } from './routines-s.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


const routes: Routes = [
  {
    path: '',
    component: RoutinesSPage
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
  declarations: [RoutinesSPage]
})
export class RoutinesSPageModule {}

