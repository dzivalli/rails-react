import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "src/routes"
import Menu from "src/components/Menu"
import CartContainer from "src/components/CartContainer"

const App = () => (
  <CartContainer>
    <Router>
      <div className="container">
        <Menu />
        <Switch>
          {
            routes.map((route, index) => (
              <Route {...route} key={index} />
            ))
          }
        </Switch>
      </div>
    </Router>
  </CartContainer>
);

export default App;

