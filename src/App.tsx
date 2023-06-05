import { FC, useContext } from "react";
import MovieSearcher from "./app/MovieSearcher/MovieSearcher";
import { AppContext } from "./store/context";
import AppErrorPage from "./shared/components/AppErrorPage/AppErrorPage";

const App: FC = () => {
  const { appState } = useContext(AppContext);
  const { error } = appState;

  return <>{error ? <AppErrorPage /> : <MovieSearcher />}</>;
};

export default App;
