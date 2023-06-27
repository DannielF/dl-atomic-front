import { ReactElement } from 'react';

/**
 * @description Error component
 * @param {string} message - Error message
 * @returns {ReactElement} React Element
 */
export const ErrorAuth = ({ message }: { message: string }): ReactElement => {
  return (
    <div className="alert alert-danger" role="alert">
      Oops... {message}
    </div>
  );
};
