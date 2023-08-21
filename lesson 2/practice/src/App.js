import { useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard/TaskCard";
import Form from "./components/Form/Form";

function App() {
  const [tasks, setTask] = useState([
    { id: 1, value: "First todo" },
    { id: 2, value: "Second todo" },
  ]);

  return (
    <div className="App">
      <div className="head">
        <h1>Get Things Done</h1>
        <Form setTask={setTask} />
        {tasks.map((el) => {
          return (
            <TaskCard
              key={el.id}
              title={el.value}
              id={el.id}
              setTask={setTask}
              tasks={tasks}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
