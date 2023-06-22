type AuthParams = {
  authorizationParams: {
    audience: string;
    redirect_uri: string;
  };
};

export const getAuthParams = (): AuthParams => {
  return {
    authorizationParams: {
      audience: import.meta.env.VITE_API_AUDIENCE,
      redirect_uri: import.meta.env.VITE_AUTH_CALLBACK_URL
    }
  };
};
