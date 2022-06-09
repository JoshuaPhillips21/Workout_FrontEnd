import React, { useState } from "react";
import NavigationComponent from "./components/navigation/navigation-container";
import routes from "./components/navigation/routes";
import { useRoutes } from "hookrouter";
import "./Styles/main.scss";
import { Mobilemenu } from "./components/navigation/mobile-menu";

function App() {
  const routeResult = useRoutes(routes);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Mobilemenu isOpen={isOpen} toggle={toggle} />
      <NavigationComponent toggle={toggle} />
      {routeResult}
    </div>
  );
}

export default App;
