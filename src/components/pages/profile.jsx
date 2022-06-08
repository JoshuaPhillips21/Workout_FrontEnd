import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useAppContext } from "../../context";
import Workouts from "../helper/profile-workouts";

export default function Profile() {
  const { setLoggedIn, loggedIn, logout, currentUser, setCurrentUser } =
    useAppContext();
  const [workouts, setWorkouts] = useState([]);

  const handleLogOut = () => {
    setLoggedIn(false);
    logout();
  };

  const renderWorkouts = () => {
    axios
      .get(
        `https://dost-thou-even-hoist-api.herokuapp.com/workout/get/user/${currentUser}`
      )
      .then((res) => {
        setWorkouts(res.data);
      })
      .catch((error) => {
        console.log("Error getting workouts", error);
      });
  };

  useEffect(() => {
    const userId = window.localStorage.getItem("user");
    setCurrentUser(userId);
    renderWorkouts();
    if (Cookies.get("username")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className="profile-page">
      <h1>Welcome {loggedIn ? Cookies.get("username") : ""}</h1>
      <button className="btn" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="workouts">
        {workouts.map((workout) => {
          return <Workouts key={workout.id} workout={workout} />;
        })}
      </div>
    </div>
  );
}
