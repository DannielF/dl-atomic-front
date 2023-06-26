import { Link } from 'react-router-dom';
import styles from './notFound.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export const NotFound = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className={styles.container__not_found}>
      <figure>
        <img
          src="https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif"
          alt="not-found"
        />
      </figure>
      {isAuthenticated && !isLoading && (
        <p>
          <Link to="/dashboard/transactions">Go to dashboard</Link>
        </p>
      )}
      {!isAuthenticated && !isLoading && (
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      )}
    </div>
  );
};
