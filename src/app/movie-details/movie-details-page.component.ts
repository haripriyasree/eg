import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetailUrl } from '../api-config/api-config';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: 'movie-details-page.component.html',
  styleUrls: ['movie-details-page.component.css']
})

export class MovieDetailsPageComponent implements OnInit {
  imdbId: string;
  movieDetail: any;
  actors: string;
  actorsArray: string[];
  genre: string;
  genreArray: string[];
  director: string;
  directorArray: string[];

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.imdbId = this.route.snapshot.paramMap.get('id');
    this.httpClient.get(MovieDetailUrl + this.imdbId)
      .subscribe(
        completeMovieDetails => {
          this.movieDetail = completeMovieDetails;
          this.actors = this.movieDetail.Actors;
          this.actorsArray = this.splittingStringToArray(this.actors);
          this.genre = this.movieDetail.Genre;
          this.genreArray = this.splittingStringToArray(this.genre);
          this.director = this.movieDetail.Director;
          this.directorArray = this.splittingStringToArray(this.director);
        }
      );
  }

  splittingStringToArray(responseString: string) {
    return responseString.split(',');
  }

  navigateToHomePage() {
    this.router.navigate(['home-page']);
  }
}
