import { useState } from "react";

import Task from "./Task";

const Todo = () => {
  const [input, setInput] = useState<string>("");

  const [toDoTasks, setToDoTasks] = useState<Array<string>>([]);
  const [doneTasks, setDoneTasks] = useState<Array<string>>([]);

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") submitTask();
  };

  const submitTask = () => {
    if (input !== "") setToDoTasks((tasks) => [input, ...tasks]);
    else alert("Task cannot be empty");
  };

  const doneTask = (index: number) => {
    setDoneTasks((tasks) => [toDoTasks[index], ...tasks]);
    deleteTask(index);
  };

  const deleteTask = (index: number) => {
    setToDoTasks((tasks) => [
      ...tasks.slice(0, index),
      ...tasks.slice(index + 1),
    ]);
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* task input and add button */}
      <div className="flex space-x-1">
        <input
          className="border border-gray-400 w-full text-2xl"
          onChange={(ev) => setInput(ev.target.value)}
          onKeyDown={onKeyDownCallback}
        ></input>
        <button
          className="border border-gray-400 w-8 font-bold"
          onClick={submitTask}
        >
          +
        </button>
      </div>

      {/* to do tasks section */}
      <div>
        {toDoTasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            isDone={false}
            taskName={task}
            doneTaskCallback={doneTask}
            deleteTaskCallback={deleteTask}
          />
        ))}
      </div>
      {/* done tasks section */}
      <div>
        {doneTasks.map((task, index) => (
          <Task key={index} index={index} isDone={true} taskName={task} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
