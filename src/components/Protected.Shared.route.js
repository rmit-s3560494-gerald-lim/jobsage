import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedSharedRoute = ({
  component: Component, 
  ...rest
}) => {
  const isEmployerAuth = localStorage.getItem('isEmployerLoggedIn');
  const isEmployeeAuth = localStorage.getItem('isEmployeeLoggedIn');
  return (
    <Route
      {...rest}
      render={props => isEmployerAuth === 'true' || isEmployeeAuth === 'true' ? (
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