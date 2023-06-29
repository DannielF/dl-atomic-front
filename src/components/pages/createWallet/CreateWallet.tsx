import { useAuth0 } from '@auth0/auth0-react';
import useToken from '../../../config/security/hook/TokenAuth';
import { useNavigate } from 'react-router-dom';
import { createClientWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { useAppDispatch } from '../../../shared/store/hooks';
import styles from './createWallet.module.css';

const classCss = `${styles.createWallet__page}`;

/**
 * @description Create wallet component
 * @component
 * @returns {ReactElement} React Element
 */
export const CreateWallet = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreateWallet = () => {
    const DispatchCreateWallet = async (email: string) => {
      const token = useToken();
      dispatch(createClientWallet({ email, token: token ?? '' }));
    };
    DispatchCreateWallet(user?.email ?? '');
    navigate('/dashboard');
  };

  return (
    <main className={classCss}>
      <h2>Create Wallet</h2>
      <button className="btn btn-primary" onClick={handleCreateWallet}>
        New Wallet !!!
      </button>
    </main>
  );
};
