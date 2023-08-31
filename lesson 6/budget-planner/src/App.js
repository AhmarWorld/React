import 'bootstrap/dist/css/bootstrap.min.css';
import BudgetCard from './components/BudgetCard/BudgetCard';
import ExpensesCard from './components/ExpensesCard/ExpensesCard';
import AddExpensCard from './components/AddExpensCard/AddExpensCard';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <div className="container">
          <BudgetCard />
          <ExpensesCard />
          <AddExpensCard />
        </div>
      </AppProvider>
    </div>
  );
}

export default App;
