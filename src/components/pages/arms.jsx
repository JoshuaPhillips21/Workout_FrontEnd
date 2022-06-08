import axios from "axios";
import React, { Component } from "react";
import ArmWorkouts from "../helper/arm-workout";
import NewWorkoutModal from "../Modals/new-workout";

export default class Arms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workoutModalIsOpen: false,
      armWorkouts: [],
    };

    this.handleNewWorkoutClick = this.handleNewWorkoutClick.bind(this);
    this.handleWorkoutModalClose = this.handleWorkoutModalClose.bind(this);
    this.handleSuccessfulNewWorkout =
      this.handleSuccessfulNewWorkout.bind(this);
    this.handleRenderArmWorkouts = this.handleRenderArmWorkouts.bind(this);
  }

  handleRenderArmWorkouts() {
    axios
      .get("https://dost-thou-even-hoist-api.herokuapp.com/workout")
      .then((res) => {
        this.setState({
          armWorkouts: res.data.filter((workout) => {
            return workout.muscle === "arms";
          }),
        });
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  componentDidMount() {
    this.handleRenderArmWorkouts();
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
      <div className="arms-workout-wrapper">
        <NewWorkoutModal
          handleWorkoutModalClose={this.handleWorkoutModalClose}
          workoutModalIsOpen={this.state.workoutModalIsOpen}
          handleSuccessfulNewWorkout={this.handleSuccessfulNewWorkout}
        />
        <button className="btn" onClick={this.handleNewWorkoutClick}>
          New Workout
        </button>

        <div className="arms-workouts">
          {this.state.armWorkouts.map((workout) => {
            return <ArmWorkouts key={workout.id} workout={workout} />;
          })}
        </div>
      </div>
    );
  }
}
