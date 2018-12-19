import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import routes from "src/routes";
import Menu from "src/components/Menu";
import ProductImages from "src/routes/product-images";
import store from "src/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default App;

