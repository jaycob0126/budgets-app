export const appStateCmd = {
  toggleAddBudget: "appState/addBudget",
  toggleAddExpense: "appState/addExpense",
  toggleLocalAddExpense: "appState/addLocalExpense",
  toggleConfirmDelete: "appState/confirmDelete",
  toggleDeleteBudget: "appState/deleteBudget",
  cancelDeleteBudget: "appState/cancelDeleteBudget",
  updateActive: "appState/updateActive",
};

export default function appStateReducer(state, action) {
  const type = action.type;
  const payload = action.payload;
  switch (type) {
    case appStateCmd.toggleAddBudget:
      return { ...state, addBudgetActive: !state.addBudgetActive };

    case appStateCmd.toggleAddExpense:
      return { ...state, addExpenseActive: !state.addExpenseActive };

    case appStateCmd.toggleLocalAddExpense:
      //payload: object
      return {
        ...state,
        addExpenseActive: !state.addExpenseActive,
        activeBudget: payload,
      };

    case appStateCmd.toggleConfirmDelete:
      //payload: object
      return {
        ...state,
        deleteBudgetActive: !state.deleteBudgetActive,
        activeBudget: payload,
      };
    case appStateCmd.cancelDeleteBudget:
      return {
        ...state,
        deleteBudgetActive: false,
      };
    case appStateCmd.toggleDeleteBudget:
      //payload: boolean

      if (payload) {
        //delete the current active budget and clear the active and reassign to last added
        //TODO

        return {
          ...state,
          deleteBudgetActive: !state.deleteBudgetActive,
          activeBudget: state.lastCreatedBudget,
          recentlyDeletedBudget: state.activeBudget,
        };
      } else {
        //if the answer is no, do nothing
        return {
          ...state,
          deleteBudgetActive: !state.deleteBudgetActive,
        };
      }

    case appStateCmd.updateActive:
      //payload = {key: string, active: Object}
      var active = payload.active;
      if (!payload) active = { name: "", amount: "" };
      return { ...state, [`active${payload.key}`]: active };

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
  recentlyDeletedBudget: {},
  activeCategory: {},
  lastCreatedBudget: {},
};
