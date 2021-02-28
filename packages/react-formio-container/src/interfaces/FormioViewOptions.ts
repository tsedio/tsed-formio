import { FormRoute } from "../views/form.routes";

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
   * List of routes/tabs displayed on the FormEdit page.
   */
  formRoutes?: FormRoute[];
  /**
   * Handler called when an event is a success
   */
  onSuccess?: FormioSuccessHandler;
  /**
   * Handler called when an event is an error
   */
  onError?: FormioErrorHandler;

  // override components
  FormsComponent?: React.ComponentType;
  FormComponent?: React.ComponentType;
  FormActionsComponent?: React.ComponentType;
  FormActionComponent?: React.ComponentType;
  FormExportComponent?: React.ComponentType;
  FormEditComponent?: React.ComponentType;
  FormAccessComponent?: React.ComponentType;
  SubmissionComponent?: React.ComponentType;
  SubmissionsComponent?: React.ComponentType;
}
