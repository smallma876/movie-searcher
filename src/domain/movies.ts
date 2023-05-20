export interface Movie {
  title: string;
  year: string;
  poster: string;
}

export interface MoviesResponse {
  Search: MovieResponse[];
  totalResults: string;
  Response: string;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}
