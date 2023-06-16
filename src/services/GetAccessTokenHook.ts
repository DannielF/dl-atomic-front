import { useAuth0 } from '@auth0/auth0-react';

export const GetAccessToken = async () => {
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
