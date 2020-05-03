import React from "react";
//import logo from './logo.svg';
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        {/* slug es el nombre de la variabre se puede llamar de cualquier forma */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
