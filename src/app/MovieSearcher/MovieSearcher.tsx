import { useEffect, useState } from "react";
import styles from "./movie-searcher.module.css";
import TextField from "../../components/TextField/TextField";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { Movie, Order } from "./domain/movies";
import Card from "../../components/Card/Card";
import { useDebounce } from "../../hooks/use-debounce";
import { apiActions } from "./actions/movie-actions";
import Selector from "../../components/Selector/Selector";

const MovieSearcher = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [query, setQuery] = useState("");
  const [orderMovies, setOrderMovies] = useState(Order.ASCENDANT);
  const debouncer = useDebounce(query);

  const onChange = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    const getMovies = async () => {
      if (query.length > 3) {
        const result = await apiActions.getMovies(query, orderMovies);
        setMovies(result);
      }
    };

    getMovies();
  }, [debouncer]);

  useEffect(() => {
    if (movies) {
      const tempMovies = [...movies];
      tempMovies.sort((a, b) => {
        if (orderMovies === Order.DESCENDANT) {
          return b.title.localeCompare(a.title);
        }
        return a.title.localeCompare(b.title);
      });
      setMovies(tempMovies);
    }
  }, [orderMovies]);

  return (
    <main className={styles.container}>
      <section>
        <form>
          <div className={styles.searcherGroup}>
            <TextField
              id="searcher"
              label=""
              name="title"
              onChange={(e) => onChange(e.target.value)}
              value={query}
            />
            <ButtonPrimary id="buttonSearcher" label="Buscar" type="button" />
            <Selector
              value={orderMovies}
              onChange={(e) => setOrderMovies(e.target.value as Order)}
            >
              <option value={Order.ASCENDANT}>Ascendente</option>
              <option value={Order.DESCENDANT}>Descendente</option>
            </Selector>
          </div>
        </form>
      </section>
      <section className={styles.listMovies}>
        {movies?.map(({ poster, title, year }) => (
          <Card
            poster={poster}
            title={title}
            year={year}
            key={`${title}-${year}`}
          />
        ))}
        {movies?.length === 0 ? <span>Prueba otra busqueda</span> : null}
      </section>
    </main>
  );
};

export default MovieSearcher;
