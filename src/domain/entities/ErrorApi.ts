/**
 * @description This is the error api interface
 * @interface ErrorApi
 * @export
 * @author dannielf
 */
export interface ErrorApi {
  statusCode?: number;
  message: string | undefined;
  path?: string;
}
