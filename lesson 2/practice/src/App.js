import { useState } from "react";
import "./App.css";
import TaskCard from './components/TaskCard'
import Form from './components/Form'

function App() {
  const [tasks,setTask] = useState([
    {id:1,value:'First todo'},
    {id:2,value:'Second todo'}
  ])

  const deleteTodo = (id) =>{
    const data = [...tasks]
    const result = data.filter(el=> el.id !== id)
    setTask(result) 
  }

  return (
    <div className="App">
      <div className="head">
        <h1>Get Things Done</h1>
        <Form setTask={setTask} />
        {tasks.map(el=>{
          return(
            <TaskCard key={el.id} title={el.value} id={el.id} deleteFunc={deleteTodo} />
          )
        })}
      </div>

    </div>
  );
}

export default App;
