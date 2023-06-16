import React from 'react';
import styles from './CardClient.module.css';
import { CardBody } from '../../molecules/cardBody/CardBody';
import { useAppSelector } from '../../../shared/store/hooks';

const classCss = `card ${styles.card__client}`;

export const CardClient = () => {
  const client = useAppSelector((state) => state.wallet.client);
  return (
    <div className={classCss}>
      <img
        src="https://www.shift4shop.com/2015/images/ecommerce-payment-gateways/digital-wallets/digital-wallet.png"
        className="card-img-top"
        alt="Digital wallet logo"
      />
      <CardBody title="Email:" text={client.email} />
      <CardBody title="Balance:" text={`$$ ${client.balance}`} />
    </div>
  );
};
