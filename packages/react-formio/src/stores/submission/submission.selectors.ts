import { Submission } from "../../interfaces";
import { selectRoot } from "../root";
import { SubmissionState } from "./submission.reducers";

export const selectSubmission = (
  name: string,
  state: string
): Partial<Submission> => selectRoot<SubmissionState>(name, state).submission;
