import { create } from "zustand";

export const useTodos = create((set) => ({
  tasks: [
    { id: 1, value: "eat lunch" },
    { id: 2, value: "go shopping" },
  ],
  addTask: (value) =>
    set((state) => {
      const newTask = { id: new Date().getTime().valueOf(), value: value };
      return { tasks: [...state.tasks, newTask] };
    }),
  deleteTask: (id) =>
    set((state) => {
      const newTasks = state.tasks.filter((task) => task.id != id);
      return { tasks: newTasks };
    }),
  editTask: (id, newValue) =>
    set((state) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === id) {
          task.value = newValue;
        }
        return task;
      });
      return { tasks: newTasks };
    }),
}));
