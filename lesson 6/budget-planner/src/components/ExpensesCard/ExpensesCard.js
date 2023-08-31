import ExpensList from '../ExpensList/ExpensList';

export default function ExpensesCard() {
    return (
        <>
            <h3 className="mt-3" >Expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpensList />
                </div>
            </div>
        </>
    )
}