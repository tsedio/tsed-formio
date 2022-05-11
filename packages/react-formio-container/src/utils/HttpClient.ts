import { Formio } from "@tsed/react-formio";

export class HttpClient {
  // eslint-disable-next-line no-useless-constructor
  constructor(private host?: string) {}

  get<T = any>(endpoint: string, data?: any, options?: any): Promise<T> {
    return this.makeRequest("get", endpoint, data, options);
  }

  post<T = any>(endpoint: string, data?: any, options?: any): Promise<T> {
    return this.makeRequest("post", endpoint, data, options);
  }

  put<T = any>(endpoint: string, data?: any, options?: any): Promise<T> {
    return this.makeRequest("put", endpoint, data, options);
  }

  head<T = any>(endpoint: string, data?: any, options?: any): Promise<T> {
    return this.makeRequest("head", endpoint, data, options);
  }

  delete<T = any>(endpoint: string, data?: any, options?: any): Promise<T> {
    return this.makeRequest("delete", endpoint, data, options);
  }

  makeRequest<T = any>(method: string, endpoint: string, data?: any, options?: any): Promise<T> {
    return Formio.makeStaticRequest(
      endpoint[0] === "/" ? `${this.host || Formio.getApiUrl()}${endpoint}` : endpoint,
      method,
      data,
      options
    );
  }
}

export const httpClient = new HttpClient();
