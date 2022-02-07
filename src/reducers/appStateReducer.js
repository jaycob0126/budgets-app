export const appStateCmd = {
  toggleAddBudget: "appState/addBudget",
  toggleAddExpense: "appState/addExpense",
  toggleDeleteBudget: "appState/deleteBudget",
};

export default function appStateReducer(state, action) {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case appStateCmd.toggleAddBudget:
      return { ...state, addBudgetActive: !state.addBudgetActive };
    case appStateCmd.toggleAddExpense:
      return { ...state, addExpenseActive: !state.addExpenseActive };
    case appStateCmd.toggleDeleteBudget:
      return { ...state, deleteBudgetActive: !state.deleteBudgetActive };
    default:
      console.error("no appstate route");
      return state;
  }
}

export const appStates = {
  addBudgetActive: false,
  deleteBudgetActive: false,
  addExpenseActive: false,
  deleteExpenseActive: false,
  activeBudget: {},
  activeCategory: {},
};
