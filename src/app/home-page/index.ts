import { HomepageRoutingModule } from './home-page-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import {
  MatIconModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomepageRoutingModule,
    MatIconModule
  ],
  declarations: [
    HomePageComponent,
    PosterComponent
  ],
  entryComponents: [
    HomePageComponent,
    PosterComponent
  ],

})

export class HomePageModule { }

