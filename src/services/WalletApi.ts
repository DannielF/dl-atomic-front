import { Client } from '../domain/entities/Client';
import { Transaction } from '../domain/entities/Transaction';
import { GetAccessToken } from './GetAccessTokenHook';

const API_URL: string = import.meta.env.VITE_API_URL;

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
    .then((clients: Client[]) => clients)
    .catch((error) => error);
};

export const getClientByEmail = async (email: string) => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/client/email/${email}`, {
    headers: headers,
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((client: Client) => client)
    .catch((error) => error);
};

export const getTransactionsByClientId = async (clientId: string) => {
  const headers = await getHeaders();
  return await fetch(`${API_URL}/transactions/${clientId}`, {
    headers: headers,
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((transactions: Transaction[]) => transactions)
    .catch((error) => error);
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
    .then((transaction: Transaction) => transaction)
    .catch((error) => error);
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
    .then((client: Client) => client)
    .catch((error) => error);
};
