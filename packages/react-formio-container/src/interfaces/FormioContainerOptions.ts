import type { Form } from "@formio/core";
import { Submission } from "@tsed/react-formio";
import { ComponentType } from "react";

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
  onSubmitForm?: (type: string, form: Form) => void;
  onSubmitSubmission?: (submissionType: string, formId: string, submission: Submission) => void;
  /**
   * i18n function to translate sentences
   */
  i18n?: (f: string) => string;

  // override components
  FormsComponent?: ComponentType<any>;
  FormComponent?: ComponentType<any>;
  FormActionsComponent?: ComponentType<any>;
  FormActionComponent?: ComponentType<any>;
  FormExportComponent?: ComponentType<any>;
  FormEditComponent?: ComponentType<any>;
  FormSettingsComponent?: ComponentType<any>;
  FormAccessComponent?: ComponentType<any>;
  SubmissionComponent?: ComponentType<any>;
  SubmissionsComponent?: ComponentType<any>;
  RemoveModalComponent?: ComponentType<any>;
  LoaderComponent?: ComponentType<any>;
}
