import { FC, FormEvent, useEffect, useState } from "react";
import { apiMovies } from "./proxy/movies";
import { Movie } from "./domain/movies";
import styles from "./app.module.css";
import Card from "./components/Card/Card";
import TextField from "./components/TextField/TextField";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";

const App: FC = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const { title } = Object.fromEntries(formData.entries());
      const result = await apiMovies.getMovies(title as string);
      setMovies(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <section>
        <form onSubmit={onSubmit}>
          <div className={styles.searcherGroup}>
            <TextField id="searcher" label="" name="title" />
            <ButtonPrimary id="buttonSearcher" label="Buscar" />
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
      </section>
    </div>
  );
};

export default App;
