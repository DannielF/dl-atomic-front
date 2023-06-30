import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Loading } from '../../components/molecules/loading/Loading';

/**
 * @description Authentication guard for routes
 * @param {React.ComponentType} component
 * @returns {React.ComponentType}
 * @author dannielf
 */
export const AuthenticationGuard = ({
  component
}: {
  component: React.ComponentType;
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: Loading,
    returnTo: () => window.location.pathname
  });

  return <Component />;
};
