import { Movie, Order } from "../domain/movies";
import { apiMovies } from "../proxy/movies";

const getMovies = async (query: string, order?: Order): Promise<Movie[]> => {
  const result = await apiMovies.getMovies(query);
  return result.sort((a, b) => {
    if(order === Order.DESCENDANT){
        return b.title.localeCompare(a.title);
    }
    return a.title.localeCompare(b.title);
  });
};

export const apiActions = {
  getMovies,
};
