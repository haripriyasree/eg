import { HomePageComponent } from './home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homepageroutes: Routes = [{
  path: '',
  component: HomePageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(homepageroutes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
