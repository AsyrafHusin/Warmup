import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoutinesDPage } from './routines-d.page';
import { RoundProgressModule } from 'angular-svg-round-progressbar';


const routes: Routes = [
  {
    path: '',
    component: RoutinesDPage
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
  declarations: [RoutinesDPage ],
  
})
export class RoutinesDPageModule {}
