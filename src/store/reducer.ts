export enum AppActions {
  SET_APP_ERROR = "SET_APP_ERROR",
  SET_APP_CLEAR = "SET_APP_CLEAR",
}

interface AppError {
  code: string;
  message: string;
}

export interface AppProps {
  error: AppError | null;
}

export interface Action {
  type: AppActions;
  payload: Partial<AppProps>;
}

export const initialValue: AppProps = {
  error: null,
};

export const appReducer = (state: AppProps, action: Action): AppProps => {
  switch (action.type) {
    case AppActions.SET_APP_ERROR:
      return { ...state, error: action.payload as AppError};
    case AppActions.SET_APP_CLEAR:
      return initialValue;
    default:
      throw new Error("unknow action");
  }
};
