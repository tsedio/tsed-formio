import { FormRoute } from "../views/form.routes";

export interface FormioEventObj<T = any> extends Record<string, unknown> {
  name: string;
  title: string;
  message: string;
  data: T;
}

export interface FormioErrorEvent<T = any> extends Record<string, unknown> {
  name: string;
  title: string;
  message: string;
  error: Error;
  data?: T;
}

export type FormioEventHandler = (eventObj: FormioEventObj) => void;
export type FormioErrorHandler = (eventObj: FormioErrorEvent) => void;

export interface FormioContainerOptions extends Record<string, unknown> {
  className?: string;
  /**
   * The base path
   */
  basePath: string;
  /**
   * The formType
   */
  formType?: string;
  /**
   * The formType
   */
  formId?: string;
  /**
   * Permitted operationsSettings
   */
  operationsSettings: Record<string, boolean>;
  /**
   * List of routes/tabs displayed on the FormEdit page.
   */
  formRoutes?: FormRoute[];
  /**
   * Handler called when an event is a success
   */
  onInfo?: FormioEventHandler;
  /**
   * Handler called when an event is a success
   */
  onSuccess?: FormioEventHandler;
  /**
   * Handler called when an event is an error
   */
  onError?: FormioErrorHandler;
  /**
   * i18n function to translate sentences
   */
  i18n?: (f: string) => string;

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
  RemoveModalComponent?: React.ComponentType;
}
