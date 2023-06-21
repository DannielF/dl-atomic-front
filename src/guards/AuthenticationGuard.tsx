import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Loading } from '../components/molecules/loading/Loading';

export const AuthenticationGuard = ({
  component
}: {
  component: React.ComponentType;
}) => {
  const Component = withAuthenticationRequired(
    component /*  , {
    onRedirecting: () => (
      <div className="page-layout">
        <Loading />
      </div>
    )
  } */
  );

  return <Component />;
};
