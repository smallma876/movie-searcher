import { FC, ReactNode, useContext, useReducer } from "react";
import { appReducer, initialValue } from "./reducer";
import { AppContext } from "./context";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({
  children,
}: AppProviderProps) => {
  const [value, dispatch] = useReducer(appReducer, initialValue);

  return (
    <AppContext.Provider value={{ appState: value, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
