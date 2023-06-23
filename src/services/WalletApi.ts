import { Client } from '../domain/entities/Client';
import { ResponseApi } from '../domain/entities/ResponseApi';
import { Transaction } from '../domain/entities/Transaction';

const API_URL: string = import.meta.env.VITE_API_URL;

/**
 * @description This is a function that is used to get the clients
 * @author dannielf
 * @param {string} token
 * @returns {Promise<Client[]>}
 */
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

/**
 * @description This is a function that is used to get the client by email
 * @param {string} email
 * @param {string} token
 * @returns {Promise<Client>}
 * @export
 * @async
 */
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

/**
 * @description This is a function that is used to get the client by id
 * @param {string} clientId
 * @param {string} token
 * @returns {Promise<Client>}
 * @export
 * @async
 */
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

/**
 * @description This is a function that is used to make a transfer
 * @param {Transaction} transaction
 * @param {string} token
 * @returns {Promise<Transaction>}
 * @export
 * @async
 */
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

/**
 * @description This is a function that is used to create a wallet
 * @param {string} email
 * @param {string} token
 * @returns {Promise<Client>}
 * @export
 * @async
 */
export const createWallet = async (email: string, token: string) => {
  return await fetch(API_URL, {
    headers: {
      authorization: `Bearer ${token}`,
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({ email })
  })
    .then((response) => response.json())
    .then((response: ResponseApi) => response.data)
    .then((client: Client) => client);
};
