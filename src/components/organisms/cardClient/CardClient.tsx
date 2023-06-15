import React from 'react';
import styles from './CardClient.module.css';
import { CardBody } from '../../molecules/cardBody/CardBody';

const classCss = `card ${styles.card__client}`;

export const CardClient = () => {
  return (
    <div className={classCss}>
      <img
        src="https://www.shift4shop.com/2015/images/ecommerce-payment-gateways/digital-wallets/digital-wallet.png"
        className="card-img-top"
        alt="Digital wallet logo"
      />
      <CardBody title="Email:" text="email1@email.com" />
      <CardBody title="Balance:" text="123456789" />
    </div>
  );
};
