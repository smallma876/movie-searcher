import { Movie, MoviesResponse } from "../domain/movies";

const API_KEY = "4bd2a545";
const URL_DOMAIN = "https://www.omdbapi.com/";

const mapperMovies = (moviesResponse: MoviesResponse): Movie[] => {
  const { Search: moviesSearched } = moviesResponse;
  return moviesSearched.map(({ Poster, Title, Year }) => ({
    title: Title,
    poster: Poster,
    year: Year,
  }));
};

const getMovies = async (title: string) => {
  const response = await fetch(`${URL_DOMAIN}?apikey=${API_KEY}&s=${title}`);
  const result = (await response.json()) as MoviesResponse;

  if (response.ok) {
    if (result.Response.toLowerCase() === "false") {
      return [];
    }

    return mapperMovies(result);
  }

  throw new Error("Wow an error! try again please :)");
};

export const apiMovies = {
  getMovies,
};
