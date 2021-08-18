import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import routes from "./route";
import renderPages from "./utils/renderPages";

export default function App() {
  return (
    <HashRouter>
      <Link to="/home">Home</Link>
      <Link to="/about">about</Link>

      {/* <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch> */}
      {renderPages(routes)}
    </HashRouter>
  );
}
