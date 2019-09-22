import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'warmup', loadChildren: './warmup/warmup.module#WarmupPageModule' },
  { path: 'startTimer', loadChildren: './start-timer/start-timer.module#StartTimerPageModule' },
  { path: 'warmup1', loadChildren: './warmup1/warmup1.module#Warmup1PageModule' },
  { path: 'warmup2', loadChildren: './warmup2/warmup2.module#Warmup2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
