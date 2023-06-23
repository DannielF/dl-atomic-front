import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { getAuthParams } from '../../../services/GetAuthParams';
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
  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreateWallet = () => {
    const dispatchCreateWallet = async (email: string) => {
      try {
        const params = getAuthParams();
        const token = await getAccessTokenSilently(params);
        dispatch(createClientWallet({ email, token: token ?? '' }));
      } catch (error) {
        console.error(error);
      }
    };
    dispatchCreateWallet(user?.email ?? '');
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
