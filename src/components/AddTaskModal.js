import React from "react";
import "./AddTaskModal.css";
export default function AddTaskModal({
  handleClose,
  addTask,
  setText,
  text,
  action,
  editTask,
  id,
}) {
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      action === "add" ? addTask() : editTask(id);
      handleClose();
    }
  };
  const addTaskModal = () => {
    action === "add" ? addTask() : editTask(id);

    handleClose();
  };

  return (
    <div className="add-task-modal-div">
      <div className="add-task-table">
        <button className="close-modal-button" onClick={handleClose}>
          X
        </button>
        <div className="add-task-name-div">
          <p className="task-name-p">Task name</p>

          <input
            className="add-task-input"
            type="text"
            value={text}
            onKeyPress={handleKeyPress}
            onChange={handleInputChange}
          />
          {action === "add" ? (
            <button
              className="add-task-button-modal"
              onClick={() => addTaskModal("add")}
            >
              Add Task
            </button>
          ) : (
            <button
              className="add-task-button-modal"
              onClick={() => addTaskModal("edit")}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
