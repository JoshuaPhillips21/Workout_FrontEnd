import React from "react";

export default function ArmWorkouts(props) {
  const { workout } = props;

  return (
    <div className="arm-workout">
      <h3>Title: {workout.title}</h3>
      <h3>Weight: {workout.weight}</h3>
      <h3>Reps: {workout.reps}</h3>
      <h3>Muscle: {workout.muscle}</h3>
    </div>
  );
}
