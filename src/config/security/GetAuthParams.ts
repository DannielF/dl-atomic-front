/**
 * @interface AuthParams
 * @description This is an interface that is used to define the authorization params
 * @property {string} authorizationParams.audience The audience
 * @property {string} authorizationParams.redirect_uri The redirect uri
 */
type AuthParams = {
  authorizationParams: {
    audience: string;
    redirect_uri: string;
  };
};

/**
 * @description This is a function that is used to get the authorization params
 * @returns {AuthParams} Returns the authorization params
 * @export
 */
export const getAuthParams = (): AuthParams => {
  return {
    authorizationParams: {
      audience: import.meta.env.VITE_API_AUDIENCE,
      redirect_uri: import.meta.env.VITE_AUTH_CALLBACK_URL
    }
  };
};
