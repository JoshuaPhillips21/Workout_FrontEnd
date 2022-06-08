import React from "react";
import Home from "../pages/home";
import Arms from "../pages/arms";
import Chest from "../pages/chest";
import Back from "../pages/back";
import Legs from "../pages/legs";
import Profile from "../pages/profile";

const routes = {
  "/": () => <Home />,
  "/arms": () => <Arms />,
  "/chest": () => <Chest />,
  "/back": () => <Back />,
  "/legs": () => <Legs />,
  "/profile": () => <Profile />,
};

export default routes;
