import type { ActionType } from "@tsed/react-formio";

import { selectRoot } from "../root";
import { ACTION_INFO } from "./action-info.constant";
import { ActionInfoState } from "./action-info.reducers";

export const selectActionInfo = (state: Record<string, any>): Partial<ActionType> => selectRoot<ActionInfoState>(ACTION_INFO, state).data!;
