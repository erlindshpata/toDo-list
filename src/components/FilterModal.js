import React from "react";
import "./AddTaskModal.css";
export default function AddTaskModal({ handleClose }) {
  return (
    <div className="add-task-modal-div">
      <div className="add-task-table">
        <button className="close-modal-button" onClick={handleClose}>
          X
        </button>
        <div className="add-task-name-div">
          <p className="task-name-p">Filter</p>

          <button
            className="add-task-button-modal"
            // onClick={() => addTaskModal("edit")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
