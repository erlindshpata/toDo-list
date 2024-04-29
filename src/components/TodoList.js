import React, { useState } from "react";
import { nanoid } from "nanoid";
import AddTaskModal from "./AddTaskModal";
import FilterModal from "./FilterModal";
import { MdFilterList, MdEdit, MdDelete } from "react-icons/md";

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      completed: false,
    },
  ]);

  const [text, setText] = useState("");
  const [action, setAction] = useState("");
  const addTask = () => {
    const newTask = {
      id: nanoid(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };
  const handleCheckBox = (id) => {
    let arr = [...tasks];
    const index = arr.findIndex((el) => el.id === id);
    arr[index].completed = !arr[index].completed;
    setTasks([...arr]);
  };

  const deleteTask = (id) => {
    let arr = [...tasks];
    const index = arr.findIndex((el) => el.id === id);
    arr.splice(index, 1);
    setTasks([...arr]);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [actualId, setActualId] = useState(0);
  const handleOpen = (param, el) => {
    setAction(param);
    setText(param === "edit" ? el.text : "");
    param === "edit" && setActualId(el.id);
    setIsModalOpen(true);
  };
  const openFilter = () => {
    setIsFilterModalOpen(true);
  };
  const handleClose = () => {
    setIsModalOpen(false);
  };

  const editTask = (id) => {
    let arr = [...tasks];
    const index = arr.findIndex((el) => el.id === id);
    arr[index].text = text;
    setTasks([...arr]);
  };
  return (
    <div className="todo-list">
      <header className="todo-header">TODO LIST</header>
      <div className="add-task">
        <button className="add-task-button" onClick={() => handleOpen("add")}>
          Add Task
        </button>
        <button className="all-button" onClick={() => openFilter()}>
          All <MdFilterList />
        </button>
        {isFilterModalOpen && <FilterModal handleClose={handleClose} />}
        {isModalOpen && (
          <AddTaskModal
            handleClose={handleClose}
            addTask={addTask}
            setText={setText}
            text={text}
            action={action}
            editTask={() => editTask()}
            id={0}
          />
        )}
      </div>
      <div className="todo-items-parent-div">
        {tasks.map((el) => (
          <div key={el.id} className="todo-item">
            <div className="check-and-text">
              <input
                className="checkbox"
                type="checkbox"
                checked={el.completed}
                onChange={() => handleCheckBox(el.id)}
              />
              <p
                className={
                  el.completed ? "text-completed" : "text-not-completed"
                }
              >
                {el.text}
              </p>
            </div>
            <div className="delete-edit-buttons">
              <button className="X-button" onClick={() => deleteTask(el.id)}>
                <MdDelete />
              </button>
              {isModalOpen && (
                <AddTaskModal
                  handleClose={handleClose}
                  addTask={addTask}
                  setText={setText}
                  text={text}
                  action={action}
                  editTask={() => editTask(actualId)}
                  id={actualId}
                />
              )}
              <button
                className="X-button"
                onClick={() => handleOpen("edit", el)}
              >
                <MdEdit />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoList;
