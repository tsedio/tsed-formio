import { EventEmitter2 } from "eventemitter2";

export interface FormOptions {
  iconset?: string;
  readOnly?: boolean;
  noAlerts?: boolean;
  i18n?: Function;
  template?: string;
  saveDraft?: boolean;
  events?: EventEmitter2;
}
