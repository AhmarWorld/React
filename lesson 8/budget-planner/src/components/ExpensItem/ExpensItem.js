import { TiDelete } from "react-icons/ti";
import { useBudget } from "../../store/useBudget";

export default function ExpensItem({ name, cost, id }) {
  const deleteExpense = useBudget((state) => state.deleteExpense);

  const handleDeleteExpense = () => {
    deleteExpense(id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span style={{ background: "#0165e6" }} className="badge mr-3">
          ₸{cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense} />
      </div>
    </li>
  );
}
