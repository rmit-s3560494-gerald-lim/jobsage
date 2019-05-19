import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedAdminRoute = ({
  component: Component, 
  ...rest
}) => {
  const isAuth = localStorage.getItem('isAdminLoggedIn');
  return (
    <Route
      {...rest}
      render={props => isAuth === 'true' ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{
          pathname: '/adminlogin',
          state: {
            from: props.location
          }
        }}
        />
      )}
    />
  );
};