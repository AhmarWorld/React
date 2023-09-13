import ExpensItem from "../ExpensItem/ExpensItem";
import { useBudget } from "../../store/useBudget";

export default function ExpenseList() {
  const expenses = useBudget((state) => state.expenses);
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpensItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
}
