import { Client } from '../domain/entities/Client';
import { ResponseApi } from '../domain/entities/ResponseApi';
import { Transaction } from '../domain/entities/Transaction';
import { GetAccessToken } from './GetAccessTokenHook';

const API_URL: string = import.meta.env.VITE_API_URL;

const getHeaders = async () => {
  const token = await GetAccessToken();
  return {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9CdUc3SXFVd3FpYjJPbUtxY1UycyJ9.eyJpc3MiOiJodHRwczovL2Rldi14Z2p3MWZqcTMxN2hucW5uLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiI4TkxiMUF5Tk55V2Y5V3dicFNEYXNibnN0ZTRncVdwc0BjbGllbnRzIiwiYXVkIjoiaHR0cDovL2JhY2stZGwuY29tIiwiaWF0IjoxNjg3MzgzMzIzLCJleHAiOjE2ODc0Njk3MjMsImF6cCI6IjhOTGIxQXlOTnlXZjlXd2JwU0Rhc2Juc3RlNGdxV3BzIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.KO6Zj3dj2yHBS92zErEDoME2n-zE1WNgFjjs4-MAqZRVPhqI_eqc8RARpQL65d4-XMigyQD-OTtSCbrhgUhuiiF2ZFP1hnbZSr4bAMp5kQXPnKg4p-H0Wdn_0pE5loWHK1zXC5udNkn7ru-HeePwZ1VckWdfVD9WRGzCYbZKIebmTZxbYM04ahA62QN-dolgxCjjwIIL2BEk9_1vIVURPo94Qx-poRMGwLMZVwaujDvK-MtgO99GjFQxKVIxAh6VYZe3PgsVyrDYGhoC0FOUvVXsmL2ZdqhcW7pxTL3sd3o9Ry0koCsTabhbJ1uFxPPG4DFB_pmh6TISC5vJ3gF7cA`,
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
  const body = { email: email };
  return await fetch(API_URL, {
    headers: headers,
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(body)
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((client: Client) => client);
};
