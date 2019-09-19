import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsPageComponent } from './movie-details-page.component';

const movieDetailsPageroutes: Routes = [{
  path: '',
  component: MovieDetailsPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(movieDetailsPageroutes)],
  exports: [RouterModule]
})
export class MovieDetailsPageRoutingModule { }
