import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import ReactTyped from "react-typed";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Users from "./Pages/Users";
const App = () => {
  //   const Home = () => {
  //     return <h1>MY HOME PAGE</h1>;
  //   };
  //   const About = () => {
  //     return <h1>MY ABOUT PAGE</h1>;
  //   };
  //   const Contact = () => {
  //     return <h1>MY CONTACT PAGE</h1>;
  //   };
  return (
    <div>
      <BrowserRouter>
        {/************* * BOOTSTRAP NAVBAR*************** */}
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="#">
              MY COMPANY
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container-wraper">
          <div className="container-text">
            <h3>AWSOME IMAGES</h3>
            <p>GOOD TO SEE you here</p>
            <ReactTyped
              strings={["wellcome", " here is the world best places"]}
              typeSpeed={50}
              backSpeed={60}
              loop
              className="type-text"
            />
          </div>
        </div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
