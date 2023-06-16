import { useAuth0 } from '@auth0/auth0-react';
import { Client } from '../domain/entities/Client';
import { Transaction } from '../domain/entities/Transaction';

const API_URL: string = import.meta.env.VITE_API_URL;

const GetAccessToken = async () => {
  const { getAccessTokenSilently } = useAuth0();

  try {
    return await getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.VITE_API_AUDIENCE,
        redirect_uri: window.location.origin
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const getClients = async () => {
  const token = await GetAccessToken();
  return await fetch(`${API_URL}/clients`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((clients: Client[]) => clients);
};

export const getClientByEmail = async (email: string) => {
  const token = await GetAccessToken();
  return await fetch(`${API_URL}/client/email/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((client: Client) => client);
};

export const getTransactionsByClientId = async (clientId: string) => {
  const token = await GetAccessToken();
  return await fetch(`${API_URL}/transactions/${clientId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((transactions: Transaction[]) => transactions);
};

export const makeTransfer = async (transaction: Transaction) => {
  const token = await GetAccessToken();
  return await fetch(`${API_URL}/transfer`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(transaction)
  })
    .then((response) => response.json())
    .then((transaction: Transaction) => transaction);
};

export const createWallet = async (email: string) => {
  const token = await GetAccessToken();
  return await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email: email })
  })
    .then((response) => response.json())
    .then((client: Client) => client);
};
