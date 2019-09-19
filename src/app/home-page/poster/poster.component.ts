import { Component, OnInit, Input } from '@angular/core';
import { SearchDetails } from 'src/app/api-model/api-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poster',
  templateUrl: 'poster.component.html',
  styleUrls: ['poster.component.css']
})

export class PosterComponent implements OnInit {
  @Input() movieDetail: SearchDetails;
  cardHoverEffect: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.cardHoverEffect = false;
  }

  currentMovieCard() {
    this.router.navigate(['movie-details', this.movieDetail.imdbID]);
  }

  showOverLay() {
    this.cardHoverEffect = true;
  }
  hideOverLay() {
    this.cardHoverEffect = false;
  }

}
