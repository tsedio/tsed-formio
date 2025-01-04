import type { ActionType } from "@tsed/react-formio";

import { selectRoot } from "../root";
import { ACTION } from "./action.constant";
import { ActionState } from "./action.reducers";

export const selectAction = (state: Record<string, any>): ActionType => selectRoot<ActionState>(ACTION, state).data;
