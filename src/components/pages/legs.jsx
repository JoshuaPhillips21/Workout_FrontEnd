import axios from "axios";
import React, { Component } from "react";
import LegWorkouts from "../helper/leg-workouts";
import NewWorkoutModal from "../Modals/new-workout";

export default class Legs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutModalIsOpen: false,
      legWorkouts: [],
    };

    this.handleNewWorkoutClick = this.handleNewWorkoutClick.bind(this);
    this.handleWorkoutModalClose = this.handleWorkoutModalClose.bind(this);
    this.handleSuccessfulNewWorkout =
      this.handleSuccessfulNewWorkout.bind(this);
    this.handleRenderLegWorkouts = this.handleRenderLegWorkouts.bind(this);
  }

  handleRenderLegWorkouts() {
    axios
      .get("https://dost-thou-even-hoist-api.herokuapp.com/workout")
      .then((res) => {
        this.setState({
          legWorkouts: res.data.filter((workout) => {
            return workout.muscle === "legs";
          }),
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.handleRenderLegWorkouts();
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
      <div className="legs-workout-wrapper">
        <NewWorkoutModal
          handleWorkoutModalClose={this.handleWorkoutModalClose}
          workoutModalIsOpen={this.state.workoutModalIsOpen}
          handleSuccessfulNewWorkout={this.handleSuccessfulNewWorkout}
        />
        <button className="btn" onClick={this.handleNewWorkoutClick}>
          New Workout
        </button>

        <div className="legs-workouts">
          {this.state.legWorkouts.map((workout) => {
            return <LegWorkouts key={workout.id} workout={workout} />;
          })}
        </div>
      </div>
    );
  }
}
