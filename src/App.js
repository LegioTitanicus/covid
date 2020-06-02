import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import UserForm from "./ForUser/UserForm/UserForm";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SubmitTrialForm from "./ForInstitution/SubmitTrialForm/SubmitTrialForm";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <ul>
          {/* <li>
            <Link to="userForm">UserForm</Link>
          </li> */}
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/studies">Studies</Link>
          </li> */}
        </ul>

        <Switch>
          <Route path="/userForm">
            <UserForm />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/studies">
            <Studies />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
      <Footer />
      <br />
      <br />
      <br />
      <SubmitTrialForm />
    </Router>
  );
};

export default App;
