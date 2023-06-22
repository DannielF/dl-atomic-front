import { Client } from '../domain/entities/Client';
import { ResponseApi } from '../domain/entities/ResponseApi';
import { Transaction } from '../domain/entities/Transaction';

const API_URL: string = import.meta.env.VITE_API_URL;

export const getClients = async (token: string) => {
  return await fetch(`${API_URL}/clients`, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((clients: Client[]) => clients);
};

export const getClientByEmail = async (email: string, token: string) => {
  return await fetch(`${API_URL}/client/email/${email}`, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((client: Client) => client);
};

export const getTransactionsByClientId = async (
  clientId: string,
  token: string
) => {
  return await fetch(`${API_URL}/transactions/${clientId}`, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'GET',
    mode: 'cors'
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((transactions: Transaction[]) => transactions);
};

export const makeTransfer = async (transaction: Transaction, token: string) => {
  return await fetch(`${API_URL}/transfer`, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(transaction)
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((transaction: Transaction) => transaction);
};

export const createWallet = async (email: string, token: string) => {
  const body = { email: email };
  return await fetch(API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body)
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((client: Client) => client);
};
