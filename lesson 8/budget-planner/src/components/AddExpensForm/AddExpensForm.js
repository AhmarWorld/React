import { useBudget } from "../../store/useBudget";
import { useState } from "react";

export default function AddExpensForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const addExpens = useBudget((state) => state.addExpens);

  const onSubmit = (event) => {
    event.preventDefault();

    addExpens(name, cost);

    setName("");
    setCost(0);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required="required"
            id="name"
            className="form-control"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            required="required"
            id="cost"
            className="form-control"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm d-flex align-items-end">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
