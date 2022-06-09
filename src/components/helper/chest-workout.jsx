import React from "react";

export default function ChestWorkouts(props) {
  const { workout } = props;
  return (
    <div className="chest-workout">
      <h3>Title: {workout.title}</h3>
      <h3>Weight: {workout.weight}</h3>
      <h3>Reps: {workout.reps}</h3>
      <h3>Muscle: {workout.muscle}</h3>
    </div>
  );
}
