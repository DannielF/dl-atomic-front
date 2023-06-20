import { Client } from '../domain/entities/Client';
import { ResponseApi } from '../domain/entities/ResponseApi';
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
    .then((response: ResponseApi) => response.data)
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
    .then((response: ResponseApi) => response.data)
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
    .then((response: ResponseApi) => response.data)
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
    .then((response: ResponseApi) => response.data)
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
    .then((response: ResponseApi) => response.data)
    .then((client: Client) => client);
};
