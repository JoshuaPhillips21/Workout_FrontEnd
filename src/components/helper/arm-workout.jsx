import React from "react";

export default function ArmWorkouts(props) {
  const { workout } = props;
  return (
    <div className="arm-workout">
      <h1>{workout.title}</h1>
      <h3>{workout.weight}</h3>
      <h3>{workout.reps}</h3>
      <h3>{workout.muscle}</h3>

      <div className="btn-container">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}
