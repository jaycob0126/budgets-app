import { createContext, useContext, useEffect, useReducer } from "react";
import appStateReducer, {
  appStates,
  appStateCmd,
} from "../reducers/appStateReducer";
import { budgetsReducer, initialBudgets } from "../reducers/budgetsReducer";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export default function AppContextProvider({ children }) {
  const [budgets, budgetsDispatch] = useReducer(budgetsReducer, initialBudgets);
  const [appState, appStateDispatch] = useReducer(appStateReducer, appStates);

  useEffect(() => {
    const activeBudget = budgets[budgets.length - 1];
    appStateDispatch({
      type: appStateCmd.updateActive,
      payload: { key: "Budget", active: activeBudget },
    });
  }, [budgets]);
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
