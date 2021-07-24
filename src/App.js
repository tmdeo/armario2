import React from "react";
import Main from "./components/pages/Main";
import Event from "./components/pages/Event";
import Review from "./components/pages/Review";
import Service from "./components/pages/Service";
import Store from "./components/pages/Store";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/event" exact component={Event} />
      <Route path="/review" exact component={Review} />
      <Route path="/service" exact component={Service} />
      <Route path="/store" exact component={Store} />
    </Router>
  );
}

export default App;
