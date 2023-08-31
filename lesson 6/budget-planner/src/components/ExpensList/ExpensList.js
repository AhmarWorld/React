import ExpensItem from '../ExpensItem/ExpensItem';
import {AppContext} from '../../context/AppContext';
import { useContext } from 'react';

export default function ExpenseList(){
    const {expenses} = useContext(AppContext)
    return(
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpensItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
            )
            )}
        </ul>
    )
}