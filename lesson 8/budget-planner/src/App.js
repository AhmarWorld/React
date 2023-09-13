import "bootstrap/dist/css/bootstrap.min.css";
import BudgetCard from "./components/BudgetCard/BudgetCard";
import ExpensesCard from "./components/ExpensesCard/ExpensesCard";
import AddExpensCard from "./components/AddExpensCard/AddExpensCard";

function App() {
  return (
    <div className="App">
      <div className="container">
        <BudgetCard />
        <ExpensesCard />
        <AddExpensCard />
      </div>
    </div>
  );
}

export default App;
