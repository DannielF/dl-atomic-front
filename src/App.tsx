import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Home } from './components/pages/home/Home';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { Loading } from './components/molecules/loading/Loading';
import { Error } from './components/molecules/error/Error';

const ProtectedDashboard = withAuthenticationRequired(Dashboard);

function App() {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      {error && <Error message={error.message} />}
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<ProtectedDashboard />} />
    </Routes>
  );
}

export default App;
