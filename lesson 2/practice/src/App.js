import { useState } from "react";
import "./App.css";
import TaskCard from './components/TaskCard'
import Form from './components/Form'

function App() {
  const [tasks,setTask] = useState([
    {is:1,value:'First todo'},
    {is:2,value:'Second todo'}
  ])
  return (
    <div className="App">
      <div className="head">
        <h1>Get Things Done</h1>
        <Form setTask={setTask} />
        {tasks.map(el=>{
          return(
            <TaskCard key={el.id} title={el.value} />
          )
        })}
      </div>

    </div>
  );
}

export default App;
