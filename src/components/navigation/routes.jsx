import React from "react";
import Home from "../pages/home";
import Arms from "../pages/arms";
import Chest from "../pages/chest";
import Back from "../pages/back";
import Legs from "../pages/legs";

const routes = {
  "/": () => <Home />,
  "/arms": () => <Arms />,
  "/chest": () => <Chest />,
  "/back": () => <Back />,
  "/legs": () => <Legs />,
};

export default routes;
