import type { Submission } from "@tsed/react-formio";

import { selectRoot } from "../root";
import { SubmissionState } from "./submission.reducers";

export const selectSubmission = (name: string, state: any): Partial<Submission> => selectRoot<SubmissionState>(name, state).data;
