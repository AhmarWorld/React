import AddExpensForm from '../AddExpensForm/AddExpensForm';

export default function AddExpensCard() {
    return (
        <>
            <h3 className="mt-3">Add Expense</h3>
            <div className="mt-3">
                <div className="col-sm">
                    <AddExpensForm />
                </div>
            </div>
        </>
    )
}