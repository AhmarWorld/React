import { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Budget() {
    const { budget } = useContext(AppContext)

    const [isEdit, setIsEdit] = useState(true)
    const [editedBudget, setEditedBudget] = useState(budget)

    const {dispatch} = useContext(AppContext)

    const handleEditBudget = () =>{
        dispatch({
            type:'EDIT_BUDGET',
            payload:budget
        })
    }

    return (
        <div className="alert alert-secondary">
            {isEdit ?
                (
                    <div className="col-sm d-flex align-items-center justify-content-between">
                        <span>Budget: ₸{budget}</span>
                        <button className="btn btn-primary" onClick={() => { setIsEdit(false) }} > Edit </button>
                    </div>
                ) : (
                    <div className="col-sm d-flex align-items-center">
                        ₸<input
                            type="number"
                            className="form-control"
                            value={editedBudget}
                            onChange={(el)=>setEditedBudget(el.target.value)}
                        />
                        <button className="btn btn-primary" onClick={() => {
                            setIsEdit(true)
                            handleEditBudget()
                        }}>Save</button>
                    </div>
                )}


        </div>
    )
}