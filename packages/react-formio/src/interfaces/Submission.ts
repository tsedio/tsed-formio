export interface Submission<T = any> extends Record<string, unknown> {
  _id?: string;
  data: T;
  metadata?: any;
}
