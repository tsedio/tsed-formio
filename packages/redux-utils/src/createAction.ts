let AUTO_INC = 0;

export interface CreateActionOptions {
  type?: string;
  mapper?: (...args: any[]) => any;
}

function getActionType() {
  return `ACTION:${AUTO_INC++}`;
}

export function createAction<T = any>(options: CreateActionOptions = {}) {
  const { type = getActionType(), mapper = (f) => f } = options;

  const action = (name: string, payload?: T, ...args: any[]) => ({
    type,
    name,
    payload: mapper(payload, ...args)
  });

  action.toString = () => type;

  return action;
}
