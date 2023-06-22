import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { getAuthParams } from '../../../services/GetAuthParams';
import { clientWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { selectClientWallet } from '../../../shared/slice/WalletSlice';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import LogoutButton from '../../atoms/logoutButton/LogoutButton';
import { CardBody } from '../../molecules/cardBody/CardBody';
import styles from './CardClient.module.css';

const classCss = `card ${styles.card__client}`;

export const CardClient = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchClientWallet = async (email: string) => {
      try {
        const params = getAuthParams();
        const token = await getAccessTokenSilently(params);
        dispatch(clientWallet({ email, token: token ?? '' }));
      } catch (error) {
        console.error(error);
      }
    };
    dispatchClientWallet(user?.email ?? '');
  }, [dispatch, user?.email, getAccessTokenSilently]);

  const client = useAppSelector(selectClientWallet);

  return (
    <div className={classCss}>
      <img
        src="https://www.shift4shop.com/2015/images/ecommerce-payment-gateways/digital-wallets/digital-wallet.png"
        className="card-img-top"
        alt="Digital wallet logo"
      />
      <CardBody title="Email:" text={client.email} />
      <CardBody title="Balance:" text={`$$ ${client.balance}`} />
      <LogoutButton />
    </div>
  );
};
