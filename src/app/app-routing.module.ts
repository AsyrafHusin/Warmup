import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'warmup', loadChildren: './warmup/warmup.module#WarmupPageModule' },
  { path: 'startTimer', loadChildren: './start-timer/start-timer.module#StartTimerPageModule' },
  { path: 'warmup1', loadChildren: './warmup1/warmup1.module#Warmup1PageModule' },
  { path: 'warmup2', loadChildren: './warmup2/warmup2.module#Warmup2PageModule' },
  { path: 'routines', loadChildren: './routines/routines.module#RoutinesPageModule' },
  { path: 'routinesC', loadChildren: './routines-c/routines-c.module#RoutinesCPageModule' },
  { path: 'routinesD', loadChildren: './routines-d/routines-d.module#RoutinesDPageModule' },
  { path: 'routinesS', loadChildren: './routines-s/routines-s.module#RoutinesSPageModule' },
  { path: 'Croutines', loadChildren: './c-routines/c-routines.module#CRoutinesPageModule' },
  { path: 'warmup3', loadChildren: './warmup3/warmup3.module#Warmup3PageModule' },
  { path: 'warmup4', loadChildren: './warmup4/warmup4.module#Warmup4PageModule' },
  { path: 'warmup5', loadChildren: './warmup5/warmup5.module#Warmup5PageModule' },
  { path: 'warmup6', loadChildren: './warmup6/warmup6.module#Warmup6PageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
