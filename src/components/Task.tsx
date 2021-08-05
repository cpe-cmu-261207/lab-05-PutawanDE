import "./task.css";

type taskComponent = {
  index: number;
  taskName: string;
  isDone: boolean;
  doneTaskCallback?: any;
  deleteTaskCallback?: any;
};

const Task = ({
  index,
  taskName,
  isDone = false,
  doneTaskCallback,
  deleteTaskCallback,
}: taskComponent) => {
  const textStyle: string = isDone ? "text-2xl line-through" : "text-2xl";

  return (
    <div className="flex justify-between h-8 items-center py-6 border-b task-wrapper">
      <span className={textStyle}>{taskName}</span>
      <div className="flex space-x-1 items-center">
        {!isDone && (
          <div className="task-btn">
            <button
              className="bg-green-400 w-24 text-2xl"
              onClick={() => doneTaskCallback(index)}
            >
              Done
            </button>
            <button
              className="bg-red-400 w-24 text-2xl"
              onClick={() => deleteTaskCallback(index)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
