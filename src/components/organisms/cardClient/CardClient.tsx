import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { clientWallet } from '../../../shared/asyncThunks/AsyncThunks';
import { useAppDispatch, useAppSelector } from '../../../shared/store/hooks';
import LogoutButton from '../../atoms/logoutButton/LogoutButton';
import { CardBody } from '../../molecules/cardBody/CardBody';
import styles from './CardClient.module.css';
import { selectClientWallet } from '../../../shared/slice/WalletSlice';

const classCss = `card ${styles.card__client}`;

export const CardClient = () => {
  const { user } = useAuth0();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(clientWallet(user?.email ?? ''));
  }, [dispatch, user?.email]);

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
