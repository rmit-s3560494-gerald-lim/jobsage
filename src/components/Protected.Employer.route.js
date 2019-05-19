import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export const ProtectedEmployerRoute = ({
  component: Component, 
  ...rest
}) => {
  const isAuth = localStorage.getItem('isEmployerLoggedIn');
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