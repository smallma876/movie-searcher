import { useEffect, useState } from "react";
import styles from "./movie-searcher.module.css";
import TextField from "../../components/TextField/TextField";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import { apiMovies } from "../../proxy/movies";
import { Movie } from "../../domain/movies";
import Card from "../../components/Card/Card";
import { useDebounce } from "../../hooks/use-debounce";

const MovieSearcher = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [query, setQuery] = useState("");
  const debouncer = useDebounce(query);

  const onChange = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    if (query.length > 3) {
      apiMovies
        .getMovies(query as string)
        .then((result) => {
          setMovies(result);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncer]);

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default MovieSearcher;
