import TaskCard from "../TaskCard/TaskCard";

export default function TaskList({ tasks, setTask }) {
  return (
    <>
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
    </>
  );
}
