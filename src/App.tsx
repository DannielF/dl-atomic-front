import { useAuth0 } from '@auth0/auth0-react';
import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from './components/molecules/errorAuth/ErrorAuth';
import { Loading } from './components/molecules/loading/Loading';
import { TableClients } from './components/organisms/tableClients/TableClients';
import { TableTransactions } from './components/organisms/tableTransactions/TableTransactions';
import { CreateWallet } from './components/pages/createWallet/CreateWallet';
import { Dashboard } from './components/pages/dashboard/Dashboard';
import { Home } from './components/pages/home/Home';
import { NotFound } from './components/pages/notFound/NotFound';
import { AuthenticationGuard } from './guards/AuthenticationGuard';

function App(): ReactElement {
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
          path="createWallet"
          element={<AuthenticationGuard component={CreateWallet} />}
        />
        <Route
          path="dashboard"
          element={<AuthenticationGuard component={Dashboard} />}
        >
          <Route path="clients" element={<TableClients />} />
          <Route path="transactions" element={<TableTransactions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
