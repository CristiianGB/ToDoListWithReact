import { string } from "prop-types";
import React, { useEffect, useState } from "react";
import "./ToDoListStyles.css";
const ToDoList = () => {
  const [inputValue, setInputValue] = useState();
  const [taskList, setTaskList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [erase, setErase] = useState();

  useEffect(() => {
    if (erase) {
      let newArray = taskList.filter((element) => element.id != erase);
      setTaskList(newArray);
    }
  }, [erase]);

  useEffect(() => {
    if (inputValue !== undefined) {
      setCounter((counter) => counter + 1);
      let object = {
        id: counter,
        body: inputValue,
      };
      setTaskList(taskList.concat(object));
    }
  }, [inputValue]);

  return (
    <div className="d-flex justify-content-center mt-2">
      <ul className="list-group">
        <li className="list-group-item list-group-item-action list-group-item-light">
          <input
            type="text"
            name="inputTask"
            placeholder="Next task"
            id="tasks"
            onKeyDown={(event) => {
              if (
                event.key == "Enter" &&
                document.getElementById("tasks").value !== ""
              ) {
                setInputValue(event.target.value);
              }
            }}
            onKeyUp={(event) => {
              if (event.key == "Enter") {
                document.getElementById("tasks").value = "";
              }
            }}
          />
        </li>
        {taskList.map((taskNode) => (
          <li
            key={taskNode.id}
            className="list-group-item list-group-item-action list-group-item-light"
          >
            {taskNode.body}
            <i
              onClick={() => setErase(taskNode.id)}
              className="fa-solid fa-delete-left"
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
