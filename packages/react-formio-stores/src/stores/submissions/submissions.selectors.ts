import { selectRoot } from "../root";
import { SubmissionsState } from "./submissions.reducers";

export const selectSubmissions = (name: string, state: any) => selectRoot<SubmissionsState>(name, state).data;

export const selectSubmissionsParameters = (name: string, state: any) => selectRoot<SubmissionsState>(name, state).parameters;
