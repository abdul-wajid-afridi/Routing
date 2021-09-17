import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import About from "./Pages/About";
import List from "./Pages/List";
function App() {
  return (
    <Router>
      <div>
        <nav style={{ padding: 10, backgroundColor: "lightgrey" }}>
          <Link
            style={{
              fontWeight: "bold",
              fontSize: 25,
              padding: 8,
              borderWidth: 2,
              borderColor: "grey",
              background: "grey",
              borderRadius: 10,
              color: "white",
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 25 }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 25 }}
            to="/users"
          >
            Users
          </Link>
          <Link
            style={{ paddingLeft: 50, fontWeight: "bold", fontSize: 25 }}
            to="/list"
          >
            List
          </Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
