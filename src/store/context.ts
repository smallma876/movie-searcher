import { Dispatch, createContext } from "react";
import { Action, AppProps } from "./reducer";

interface AppContextProps {
  dispatch: Dispatch<Action>;
  appState: AppProps;
}

export const AppContext = createContext({} as AppContextProps);
