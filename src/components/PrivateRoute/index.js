import React, { ReactPropTypes } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getState } from '../../store';

/**
 * NOTE: you can't wrap component with connect from react-redux, since the Route functionality doesn't work
 */

const PrivateRoute = ({ component: Component, path }) => (
  <Route
    path={path}
    render={props =>
      getState().user.isAuthorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/auth',
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
