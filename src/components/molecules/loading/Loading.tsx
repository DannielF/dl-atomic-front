import React from 'react';

export const Loading = () => {
  const loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';
  return (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <img src={loadingImg} alt="Loading..." />
      </div>
    </div>
  );
};
