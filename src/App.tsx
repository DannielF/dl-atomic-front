import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import { Error } from './components/molecules/errorAuth/ErrorAuth';
import { Loading } from './components/molecules/loading/Loading';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { Home } from './components/pages/home/Home';
import { AuthenticationGuard } from './guards/AuthenticationGuard';

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {error && <Error message={error.message} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="dashboard"
          element={<AuthenticationGuard component={() => <Dashboard />} />}
        />
      </Routes>
    </>
  );
}

export default App;
