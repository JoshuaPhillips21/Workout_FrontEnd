import React from "react";
import NavigationComponent from "./components/navigation/navigation-container";
import routes from "./components/navigation/routes";
import { useRoutes } from "hookrouter";
import "./Styles/main.scss";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div className="App">
      <NavigationComponent />
      {routeResult}
    </div>
  );
}

export default App;
