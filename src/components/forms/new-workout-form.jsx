import React, { useState } from "react";
import { useAppContext } from "../../context";

export default function NewWorkoutForm(props) {
  const [title, setTitle] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [muscle, setMuscle] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const { currentUser } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "" || weight === "" || reps === "" || muscle === "") {
      setError(true);
      setErrorMesssage("Error: All fields must be completed.");
    } else {
      fetch("http://127.0.0.1:5000/workout/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "no-cors",
        },

        body: JSON.stringify({
          title: title,
          weight: weight,
          reps: reps,
          muscle: muscle,
          user_id: currentUser,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setError(false);
          setErrorMesssage("");
          props.handleSuccessfulFormSubmission();
        })
        .catch((error) => {
          console.log(error);
          setError(true);
          setErrorMesssage("Error creating workout", error);
        });
    }
  };

  return (
    <div className="workout-container">
      <form className="workout-form-wrapper" onSubmit={handleSubmit}>
        <div className="two-columns">
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            placeholder="Title"
            value={title}
          />
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            name="weight"
            placeholder="Weight"
            value={weight}
          />
          <input
            type="text"
            onChange={(e) => setReps(e.target.value)}
            name="reps"
            placeholder="Reps"
            value={reps}
          />
          <input
            type="text"
            onChange={(e) => setMuscle(e.target.value)}
            name="muscle"
            placeholder="Muscle"
            value={muscle}
          />
        </div>
        <button className="btn">Add New Workout</button>
      </form>
      <h3 style={{ visibility: error ? "visible" : "hidden" }}>
        {errorMessage}
      </h3>
    </div>
  );
}
