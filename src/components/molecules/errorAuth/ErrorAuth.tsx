/**
 * @description Error component
 * @param {string} message - Error message
 * @returns {ReactElement} React Element
 */
export const Error = ({ message }: { message: string }) => {
  return (
    <div className="alert alert-danger" role="alert">
      Oops... {message}
    </div>
  );
};
