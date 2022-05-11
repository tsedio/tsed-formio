import { createReducer, InitialStateCreator } from "@tsed/redux-utils";
import { Submission } from "../../interfaces";
import {
  clearSubmissionError,
  failSubmission,
  receiveSubmission,
  requestSubmission,
  resetSubmission,
  sendSubmission
} from "./submission.actions";

export interface SubmissionState {
  formId: string;
  id: string;
  isActive: boolean;
  lastUpdated: number;
  data: Partial<Submission>;
  url: string;
  error: null | Error;
}

const createInitialState: InitialStateCreator = () => ({
  formId: "",
  id: "",
  isActive: false,
  lastUpdated: 0,
  data: {},
  url: "",
  error: null
});

export const submissionReducer = createReducer<SubmissionState>(
  {
    [resetSubmission.toString()]: (_: any, _2: any, reset: any) => reset(),
    [clearSubmissionError.toString()]: (state: any) => ({
      ...state,
      error: null
    }),
    [requestSubmission.toString()]: (state: any, { formId, id, url }: any) => ({
      ...state,
      formId,
      id,
      url,
      data: {},
      isActive: true
    }),
    [sendSubmission.toString()]: (state: any, { formId, submission, id, url }: any) => ({
      ...state,
      formId,
      id,
      url: url || state.url,
      data: submission,
      isActive: true
    }),
    [receiveSubmission.toString()]: (state: any, { submission, url }: any) => ({
      ...state,
      data: submission,
      url: url || state.url,
      isActive: false,
      error: null
    }),
    [failSubmission.toString()]: (state: any, { error }: any) => ({
      ...state,
      isActive: false,
      error
    })
  },
  createInitialState
);
