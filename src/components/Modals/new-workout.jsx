import React from "react";

function NewWorkout({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="close-button">
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>New Workout</h1>
        </div>
        <div className="body">
          <input type="text" placeholder="title" name="title" />
          <input type="text" placeholder="weight" name="weight" />
          <input type="text" placeholder="reps" name="reps" />
          <input type="text" placeholder="muscle" name="muscle" />
        </div>
        <div className="modal-buttons">
          <button type="submit" onClick={() => closeModal(false)}>
            Add Workout
          </button>
        </div>
      </div>
    </div>
  );
}
export default NewWorkout;
