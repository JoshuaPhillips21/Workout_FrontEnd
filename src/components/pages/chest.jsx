import axios from "axios";
import React, { Component } from "react";
import ChestWorkouts from "../helper/chest-workout";
import NewWorkoutModal from "../Modals/new-workout";

export default class Chest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutModalIsOpen: false,
      chestWorkouts: [],
    };

    this.handleNewWorkoutClick = this.handleNewWorkoutClick.bind(this);
    this.handleWorkoutModalClose = this.handleWorkoutModalClose.bind(this);
    this.handleSuccessfulNewWorkout =
      this.handleSuccessfulNewWorkout.bind(this);
    this.handleRenderChestWorkouts = this.handleRenderChestWorkouts.bind(this);
  }

  handleRenderChestWorkouts() {
    axios
      .get("http://127.0.0.1:5000/workout")
      .then((res) => {
        this.setState({
          chestWorkouts: res.data.filter((workout) => {
            return workout.muscle === "chest";
          }),
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.handleRenderChestWorkouts();
  }

  handleNewWorkoutClick() {
    this.setState({
      workoutModalIsOpen: true,
    });
  }

  handleWorkoutModalClose() {
    this.setState({
      workoutModalIsOpen: false,
    });
  }

  handleSuccessfulNewWorkout() {
    this.setState({
      workoutModalIsOpen: false,
    });
  }

  render() {
    return (
      <div className="chest-workout-wrapper">
        <NewWorkoutModal
          handleWorkoutModalClose={this.handleWorkoutModalClose}
          workoutModalIsOpen={this.state.workoutModalIsOpen}
          handleSuccessfulNewWorkout={this.handleSuccessfulNewWorkout}
        />
        <button className="btn" onClick={this.handleNewWorkoutClick}>
          New Workout
        </button>

        <div className="chest-workouts">
          {this.state.chestWorkouts.map((workout) => {
            return <ChestWorkouts key={workout.id} workout={workout} />;
          })}
        </div>
      </div>
    );
  }
}
