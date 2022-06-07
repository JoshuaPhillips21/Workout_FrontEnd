import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const AppContext = createContext();

export default function AppWrapper({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const logout = () => {
    if (Cookies.get("username")) {
      setLoggedIn(false);
      setCurrentUser(null);
      Cookies.remove("username");
      window.localStorage.removeItem("user");
    }
  };

  const login = () => {
    if (Cookies.get("username")) {
      setLoggedIn(true);
      const userInfo = window.localStorage.getItem("user");
      setCurrentUser(userInfo);
    }
  };

  let sharedState = {
    loggedIn: loggedIn,
    setLoggedIn: (value) => setLoggedIn(value),
    login: () => login(),
    logout: () => logout(),
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
