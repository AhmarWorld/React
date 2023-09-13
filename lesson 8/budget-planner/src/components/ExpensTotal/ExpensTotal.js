import { useBudget } from "../../store/useBudget";

export default function ExpensTotal() {
  const expenses = useBudget((state) => state.expenses);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-primary">
      <span>Spent so far: ₸{totalExpenses}</span>
    </div>
  );
}
