import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.scss";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
