export interface MovieDetailsModel {
  Response: string;
  Search: SearchDetails[];
  totalResults: string;
  Error: string;
}

export interface SearchDetails {
  Title: string;
  Year: number;
  imdbID: string;
  Type: string;
  Poster: string;
}
