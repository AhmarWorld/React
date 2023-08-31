import Budget from '../Budget/Budget';
import Remaining from '../Remaining/Remaining';
import ExpensTotal from '../ExpensTotal/ExpensTotal';

export default function BudgetCard() {
    return (
        <>
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget />
                </div>
                <div className="col-sm">
                    <Remaining />
                </div>
                <div className="col-sm">
                    <ExpensTotal />
                </div>
            </div>
        </>
    )
}