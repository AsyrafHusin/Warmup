import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'warmup', loadChildren: './warmup/warmup.module#WarmupPageModule' },
  { path: 'routines', loadChildren: './routines/routines.module#RoutinesPageModule' },
  { path: 'routinesC', loadChildren: './routines-c/routines-c.module#RoutinesCPageModule' },
  { path: 'routinesD', loadChildren: './routines-d/routines-d.module#RoutinesDPageModule' },
  { path: 'routinesS', loadChildren: './routines-s/routines-s.module#RoutinesSPageModule' },
  { path: 'results', loadChildren: './results/results.module#ResultsPageModule' },
  { path: 'routines-list', loadChildren: './routines-list/routines-list.module#RoutinesListPageModule' },
  { path: 'rsInfo', loadChildren: './modal/rs-info/rs-info.module#RsInfoPageModule' },
  { path: 'rdInfo', loadChildren: './modal/rd-info/rd-info.module#RdInfoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  