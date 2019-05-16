import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import userAuth from './UserAuth';

export const ProtectedUserRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest} 
      render = {(props) => {
        if(userAuth.isAdminAuthenticated()) {
          return <Component {...props} />;
        }
        else {
          return <Redirect to={
            {
              pathname: "/login",
              state: {
                from: props.location
              }
            }
          }/>
        } 
      }}
    />
  );
};