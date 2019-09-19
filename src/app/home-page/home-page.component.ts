import { MovieDetailsModel } from './../api-model/api-model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import omdbApi, { MovieListUrl } from '../api-config/api-config';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})

export class HomePageComponent implements OnInit {
  inputSearchForm: FormGroup;
  searchValue: string;
  movieResponse: MovieDetailsModel;
  showLogoAndText: boolean;
  latestInputFieldValue: string;
  showMovieNotFoundMessage: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.showLogoAndText = true;
    this.inputSearchForm = this.fb.group({
      searchBoxInput: ['']
    });
    this.onChanges();
  }

  onChanges(): void {
    this.searchBoxFormField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(movieTitle => {
      movieTitle = this.removeWhiteSpace(movieTitle);
      this.checkInputField(this.searchBoxFormField.value);
      this.http.get(MovieListUrl + movieTitle)
        .subscribe
        (
          (response: MovieDetailsModel) => {
            this.movieResponse = response;
            if (this.movieResponse.Error) {
              this.showMovieNotFoundMessage = true;
            }
          });
    });
  }

  removeWhiteSpace(movieTitle: string) {
    return movieTitle.replace(/\s/g, '');
  }

  get searchBoxFormField(): FormControl {
    return this.inputSearchForm.get('searchBoxInput') as FormControl;
  }

  checkInputField(searchedValue: string) {
    this.latestInputFieldValue = searchedValue;
    if (this.latestInputFieldValue.length > 0) {
      this.showLogoAndText = false;
      this.showMovieNotFoundMessage = false;
    } else {
      this.showLogoAndText = true;
    }
  }

}
