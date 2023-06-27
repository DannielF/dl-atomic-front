import { ReactElement } from 'react';

/**
 * @description Loading auth component
 * @component
 * @returns {ReactElement} React Element
 */
export const Loading = (): ReactElement => {
  const loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <img src={loadingImg} alt="Loading..." />
      </div>
    </div>
  );
};
