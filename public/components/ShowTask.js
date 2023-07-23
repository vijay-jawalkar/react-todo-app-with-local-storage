export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleDelete = (id) => {
    const updateTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(updateTaskList);
  };

  // setTaskList(taskList.filter((todo) => todo.id !== id));

  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title"> Todo </span>
          <span className="count"> {taskList.length} </span>
        </span>

        <button className="clearAll" onClick={() => setTaskList([])}>
          {" "}
          Clear All{" "}
        </button>
      </p>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name"> {task.name} </span>
              <span className="time"> {task.time}</span>
            </p>

            <i
              class="bi bi-pencil-square"
              onClick={() => handleEdit(task.id)}
            ></i>
            <i class="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
