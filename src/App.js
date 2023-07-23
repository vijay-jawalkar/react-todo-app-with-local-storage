import { useState, useEffect } from "react";
import "./styles.css";
import { Header } from "../public/components/Header.js";
import { AddTask } from "../public/components/AddTask.js";
import { ShowTask } from "../public/components/ShowTask.js";

export default function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}
