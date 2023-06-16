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

const getHeaders = async () => {
  const token = await GetAccessToken();
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};

export const getClients = async () => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/clients`, {
    headers: headers,
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((clients: Client[]) => clients);
};

export const getClientByEmail = async (email: string) => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/client/email/${email}`, {
    headers: headers,
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((client: Client) => client);
};

export const getTransactionsByClientId = async (clientId: string) => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/transactions/${clientId}`, {
    headers: headers,
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((transactions: Transaction[]) => transactions);
};

export const makeTransfer = async (transaction: Transaction) => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/transfer`, {
    headers: headers,
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(transaction)
  })
    .then((response) => response.json())
    .then((transaction: Transaction) => transaction);
};

export const createWallet = async (email: string) => {
  const headers = await getHeaders();
  return await fetch(API_URL, {
    headers: headers,
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email: email })
  })
    .then((response) => response.json())
    .then((client: Client) => client);
};
