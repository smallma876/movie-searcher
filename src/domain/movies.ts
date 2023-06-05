export interface Movie {
  title: string;
  year: string;
  poster: string;
}

export interface MoviesResponse {
  Response: string;
  Search: MovieResponse[];
  totalResults?: string;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}
