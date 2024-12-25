let AUTO_INC = 0;

export interface CreateActionOptions {
  type?: string;
  mapper?: (...args: any[]) => any;
}

function getActionType(): string {
  return `ACTION:${AUTO_INC++}`;
}

export interface ActionReducer<T = any> {
  (
    name: string,
    payload?: T,
    ...args: any[]
  ): {
    type: string;
    name: string;
    payload: T;
  };
  toString(): string;
}

export function createAction<T = any>(options: CreateActionOptions = {}): ActionReducer {
  const { type = getActionType(), mapper = (f: any): any => f } = options;

  const action = (name: string, payload?: T, ...args: any[]): { type: string; name: string; payload: T } => ({
    type,
    name,
    payload: mapper(payload, ...args)
  });

  action.toString = (): string => type;

  return action;
}
