import React from "react";
import { Router, Route, Switch, matchPath } from "react-router-dom";
import { Provider } from "react-redux";
import history from "src/helpers/history";

import routes from "src/routes";
import Menu from "src/components/Menu";
import ProductImages from "src/routes/product-images";
import store from "src/store";

history.listen((location) => {
  routes
    .filter((route) => route.prepareData)
    .filter((route) => matchPath(location.pathname, route))
    .forEach((route) => route.prepareData(store));
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
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
    );
  }
}

export default App;

