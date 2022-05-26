import React, { useState } from "react";
import NewWorkout from "../forms/new-workout";

function Arms() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="arms">
      <button
        className="openModal"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Workout
      </button>
      {openModal && <NewWorkout closeModal={setOpenModal} />}
      This is the arms page
    </div>
  );
}

export default Arms;
