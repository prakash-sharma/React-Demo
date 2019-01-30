import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes/routes';

class RouterConfig extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    );
  }
}
export default RouterConfig;