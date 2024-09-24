export interface MoviesResponse {
  Search: Movie[];
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
