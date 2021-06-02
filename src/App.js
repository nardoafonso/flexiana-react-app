import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import SearchRepository from "./components/repository/SearchRepository";
import SearchUsers from "./components/user/SearchUsers";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">React Contributors</Link>
          </li>
          <li>
            <Link to="/search">Search Repositories</Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/search">
            <SearchRepository />
          </Route>
          <Route path="/">
            <SearchUsers />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  );
}

export default App;
