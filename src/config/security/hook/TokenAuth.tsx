import { Auth0ContextInterface, useAuth0 } from '@auth0/auth0-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { getAuthParams } from '../../../services/GetAuthParams';

const getToken = (
  getAccessTokenSilently: Auth0ContextInterface['getAccessTokenSilently'],
  setToken: Dispatch<SetStateAction<string | null>>
): void => {
  const getTokenAuth0 = async (): Promise<void> => {
    try {
      const AuthParams = getAuthParams();
      const token = await getAccessTokenSilently(AuthParams);
      setToken(token);
    } catch (error) {
      setToken(null);
    }
  };
  getTokenAuth0();
};

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const { getAccessTokenSilently } = useAuth0();
  getToken(getAccessTokenSilently, setToken);
  return token;
};

export default useToken;
