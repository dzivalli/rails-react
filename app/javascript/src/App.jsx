import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "src/routes"
import Menu from "src/components/Menu"
import CartContainer from "src/components/CartContainer"
import ProductImages from "src/routes/product-images"

class App extends React.Component {
  render() {
    return (
      <CartContainer>
        <Router basename="/app">
          <div className="container">
            <Menu />
            <Switch>
              {
                routes.map((route, index) => (
                  <Route {...route} key={index} />
                ))
              }
            </Switch>
            <Route {...ProductImages}/>
          </div>
        </Router>
      </CartContainer>
    )
  }
}

export default App;

