import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedEmployeeRoute = ({
  component: Component, 
  ...rest
}) => {
  const isAuth = localStorage.getItem('isEmployeeLoggedIn');
  return (
    <Route
      {...rest}
      render={props => isAuth === 'true' ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }}
        />
      )}
    />
  );
};