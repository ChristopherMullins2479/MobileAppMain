import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'arsenal',
    loadChildren: () => import('./arsenal/arsenal.module').then( m => m.ArsenalPageModule)
  },
  {
    path: 'brighton',
    loadChildren: () => import('./brighton/brighton.module').then( m => m.BrightonPageModule)
  },
  {
    path: 'aston-villa',
    loadChildren: () => import('./aston-villa/aston-villa.module').then( m => m.AstonVillaPageModule)
  },
  {
    path: 'burnley',
    loadChildren: () => import('./burnley/burnley.module').then( m => m.BurnleyPageModule)
  },
  {
    path: 'chelsea',
    loadChildren: () => import('./chelsea/chelsea.module').then( m => m.ChelseaPageModule)
  },
  {
    path: 'crystal-palace',
    loadChildren: () => import('./crystal-palace/crystal-palace.module').then( m => m.CrystalPalacePageModule)
  },
  {
    path: 'everton',
    loadChildren: () => import('./everton/everton.module').then( m => m.EvertonPageModule)
  },
  {
    path: 'fulham',
    loadChildren: () => import('./fulham/fulham.module').then( m => m.FulhamPageModule)
  },
  {
    path: 'leicester',
    loadChildren: () => import('./leicester/leicester.module').then( m => m.LeicesterPageModule)
  },
  {
    path: 'leeds',
    loadChildren: () => import('./leeds/leeds.module').then( m => m.LeedsPageModule)
  },
  {
    path: 'liverpool',
    loadChildren: () => import('./liverpool/liverpool.module').then( m => m.LiverpoolPageModule)
  },
  {
    path: 'man-city',
    loadChildren: () => import('./man-city/man-city.module').then( m => m.ManCityPageModule)
  },
  {
    path: 'man-utd',
    loadChildren: () => import('./man-utd/man-utd.module').then( m => m.ManUtdPageModule)
  },
  {
    path: 'newcastle',
    loadChildren: () => import('./newcastle/newcastle.module').then( m => m.NewcastlePageModule)
  },
  {
    path: 'shefield',
    loadChildren: () => import('./shefield/shefield.module').then( m => m.ShefieldPageModule)
  },
  {
    path: 'southampton',
    loadChildren: () => import('./southampton/southampton.module').then( m => m.SouthamptonPageModule)
  },
  {
    path: 'spurs',
    loadChildren: () => import('./spurs/spurs.module').then( m => m.SpursPageModule)
  },
  {
    path: 'west-brom',
    loadChildren: () => import('./west-brom/west-brom.module').then( m => m.WestBromPageModule)
  },
  {
    path: 'west-ham',
    loadChildren: () => import('./west-ham/west-ham.module').then( m => m.WestHamPageModule)
  },
  {
    path: 'wolves',
    loadChildren: () => import('./wolves/wolves.module').then( m => m.WolvesPageModule)
  },
  {
    path: 'set-team-theam',
    loadChildren: () => import('./set-team-theam/set-team-theam.module').then( m => m.SetTeamTheamPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
