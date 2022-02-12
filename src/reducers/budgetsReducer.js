import { v4 as uuidv4 } from "uuid";

// budgetsSlice: [
//   {
//     id: "",
//     name: "",
//     amount: 0,
//     date: 0,
//     completed: false
//   }
// ]

export const budgetsCmd = {
  add: "budgets/add",
  delete: "budgets/delete",
  edit: "budgets/edit",
  sort: "budgets/sort",
};

export const budgetsReducer = (state, action) => {
  const type = action.type;
  const payload = action.payload;

  switch (type) {
    case budgetsCmd.add:
      //payload: {name: string, amount: date}
      const newBudget = {
        id: uuidv4(),
        name: payload.name,
        amount: payload.amount,
        date: () => Date.now(),
        completed: false,
      };
      return [...state, newBudget];
    case budgetsCmd.delete:
      //payload: budgetID
      const newBudgets = state.filter((budget) => budget.id !== payload);
      return newBudgets;
    case budgetsCmd.edit:
      return;

    default:
      return state;
  }
};

// export const initialBudgets = [];
export const initialBudgets = [
  {
    id: 1,
    name: "School",
    amount: 1800,
    maxAmount: 2000,
  },
  {
    id: 2,
    name: "Work",
    amount: 900,
    maxAmount: 1500,
  },
  {
    id: 3,
    name: "Home",
    amount: 2000,
    maxAmount: 3000,
  },
  { id: 4, name: "Adventures", amount: 800, maxAmount: 4000 },
  { id: 5, name: "Shopping", amount: 2000, maxAmount: 2000 },
  { id: 6, name: "Clothes", amount: 300, maxAmount: 1200 },
];
