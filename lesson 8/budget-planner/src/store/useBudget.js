import { create } from "zustand";

export const useBudget = create((set) => ({
  budget: 10000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
  addExpens: (name, cost) =>
    set((state) => {
      const newExpens = {
        id: new Date().getTime(),
        name,
        cost: parseInt(cost),
      };
      return { expenses: [...state.expenses, newExpens] };
    }),
  deleteExpense: (id) =>
    set((state) => {
      const newExpenses = state.expenses.filter((el) => el.id != id);
      return { expenses: newExpenses };
    }),
  editBudget: (newBudget) =>
    set(() => {
      console.log(newBudget);
      return { budget: parseInt(newBudget) };
    }),
}));
