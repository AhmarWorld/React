import {useState} from 'react'
import TaskInput from './Input/TaskInput'
import TaskButton from './Button/TaskButton'

export default function From({setTask}){
    const [inputValue, setInputValue] = useState('')

    const addNewTask = () =>{
        setTask(prev=>[...prev,{id:new Date(), value:inputValue}])
    }
    return(
        <div>
            <TaskInput inputValue={inputValue} setInputValue={setInputValue} />
            <TaskButton value='AddTask' func={addNewTask}/>
        </div>
    )
}
