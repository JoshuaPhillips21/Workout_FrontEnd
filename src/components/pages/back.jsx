import axios from "axios";
import React, { Component } from "react";
import BackWorkouts from "../helper/back-workout";
import NewWorkoutModal from "../Modals/new-workout";

export default class Back extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutModalIsOpen: false,
      backWorkouts: [],
    };

    this.handleNewWorkoutClick = this.handleNewWorkoutClick.bind(this);
    this.handleWorkoutModalClose = this.handleWorkoutModalClose.bind(this);
    this.handleSuccessfulNewWorkout =
      this.handleSuccessfulNewWorkout.bind(this);
    this.handleRenderBackWorkouts = this.handleRenderBackWorkouts.bind(this);
  }

  handleRenderBackWorkouts() {
    axios
      .get("http://127.0.0.1:5000/workout")
      .then((res) => {
        this.setState({
          backWorkouts: res.data.filter((workout) => {
            return workout.muscle === "back";
          }),
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.handleRenderBackWorkouts();
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
      <div className="back-workout-wrapper">
        <NewWorkoutModal
          handleWorkoutModalClose={this.handleWorkoutModalClose}
          workoutModalIsOpen={this.state.workoutModalIsOpen}
          handleSuccessfulNewWorkout={this.handleSuccessfulNewWorkout}
        />
        <button className="btn" onClick={this.handleNewWorkoutClick}>
          New Workout
        </button>

        <div className="back-workouts">
          {this.state.backWorkouts.map((workout) => {
            return <BackWorkouts key={workout.id} workout={workout} />;
          })}
        </div>
      </div>
    );
  }
}
