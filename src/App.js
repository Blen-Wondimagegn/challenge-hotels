import "./App.css";
// import "bootsrap/dist/css/bootstrap.min.css";
// import { Button, Card } from "react-bootstrap";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Hotel from "./components/Hotel";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hotels" exact component={Hotel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
