import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
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
        <TaskList tasks={tasks} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
