import { createContext, useContext, useReducer } from "react";
import appStateReducer, { appStates } from "../reducers/appStateReducer";
import { budgetsReducer, initialBudgets } from "../reducers/budgetsReducer";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [budgets, budgetsDispatch] = useReducer(budgetsReducer, initialBudgets);
  const [appState, appStateDispatch] = useReducer(appStateReducer, appStates);
  return (
    <>
      <AppContext.Provider
        value={{ budgets, budgetsDispatch, appState, appStateDispatch }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}
