/**
 * @description This is the client interface
 * @interface Client
 * @export
 * @author dannielf
 */
export interface Client {
  clientId?: string;
  email: string;
  balance: number;
}
