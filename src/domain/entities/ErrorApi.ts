export interface ErrorApi {
  statusCode?: number;
  message: string | undefined;
  path?: string;
}
