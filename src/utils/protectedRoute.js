import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from './auth';

export default function ProtectedRoute({ component: Component, ...rest}) {
  return (
    <Route 
      {...rest}
      render = {(props) => getToken() ? <Component {...props} /> : 
        <Redirect to={{ pathname: '/admin/auth', state: { from: props.location }}} />
      }
    />
  );
};