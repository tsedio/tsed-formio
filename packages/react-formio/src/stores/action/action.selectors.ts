import { selectRoot } from "../root";

export const selectAction = (state: any) => selectRoot("action", state).data;
