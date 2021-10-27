import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isPublic?: boolean;
  component: React.ComponentType;
}

export const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isPublic = false,
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === isAuthenticated || isPublic ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
