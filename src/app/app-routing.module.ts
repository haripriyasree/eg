import { AppComponent } from 'src/app/app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  children: [
    {
      path: '',
      redirectTo: 'home-page',
      pathMatch: 'full'
    },
    {
      path: 'home-page',
      loadChildren: () => import('src/app/home-page/index').then(m => m.HomePageModule)
    },
    {
      path: 'movie-details/:id',
      loadChildren: () => import('src/app/movie-details/index').then(m => m.MovieDetailsPageModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
