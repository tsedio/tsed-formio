export interface FormioSuccessEvent<T = any> extends Record<string, unknown> {
  name: string;
  title: string;
  message: string;
  data: T;
}

export interface FormioErrorEvent extends Record<string, unknown> {
  name: string;
  title: string;
  message: string;
  error: Error;
}

export type FormioSuccessHandler = (eventObj: FormioSuccessEvent) => void;
export type FormioErrorHandler = (eventObj: FormioErrorEvent) => void;

export interface FormioViewOptions extends Record<string, unknown> {
  /**
   * The base path
   */
  basePath: string;
  /**
   * Permitted operations
   */
  operations: Record<string, boolean>;
  /**
   * Handler called when an event is a success
   */
  onSuccess?: FormioSuccessHandler;
  onError?: FormioErrorHandler;
}
