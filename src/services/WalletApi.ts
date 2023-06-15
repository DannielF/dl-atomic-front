import { useAuth0 } from '@auth0/auth0-react';
import { Client } from '../domain/entities/Client';

const API_URL: string = import.meta.env.API_URL;

const GetAccessToken = async () => {
  const { getAccessTokenSilently } = useAuth0();

  try {
    return await getAccessTokenSilently({
      authorizationParams: {
        audience: import.meta.env.API_AUDIENCE
      }
    });
  } catch (error) {
    console.log(error);
  }
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
