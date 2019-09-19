import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatIconModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailsPageComponent } from './movie-details-page.component';
import { MovieDetailsPageRoutingModule } from './movie-details-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MovieDetailsPageRoutingModule
  ],
  declarations: [
    MovieDetailsPageComponent
  ],
  entryComponents: [
    MovieDetailsPageComponent
  ],

})

export class MovieDetailsPageModule { }

