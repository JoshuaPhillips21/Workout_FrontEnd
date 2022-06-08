import React, { useState } from "react";
import axios from "axios";

export default function Workouts(props) {
  const { workout } = props;
  //   const [title, setTitle] = useState("");
  //   const [weight, setWeight] = useState("");
  //   const [reps, setReps] = useState("");
  //   const [muscle, setMuscle] = useState("");
  //   const [workoutToEdit, setWorkoutToEdit] = useState(props.workout);
  //   const [editMode, setEditmode] = useState(false);
  const [allWorkouts, setAllWorkouts] = useState([]);

  const handleDeleteClick = (id) => {
    axios
      .delete(`http://127.0.0.1:5000/workout/delete/${id}`)
      .then((res) => {
        setAllWorkouts(
          allWorkouts.filter((workout) => {
            return workout.id !== id;
          })
        );
      })
      .catch((error) => {
        console.log("An error occured while deleting the workout", error);
      });
  };

  return (
    <div className="profile-workout">
      <h1>{workout.title}</h1>
      <h3>{workout.weight}</h3>
      <h3>{workout.reps}</h3>
      <h3>{workout.muscle}</h3>

      <div className="btn-container">
        <button className="btn">Edit</button>
        <button className="btn" onClick={() => handleDeleteClick(workout.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
