export type TActionType = {
  [key: string]: string;
};
export type TAction = {
  type: string;
  payload?: any;
};
export type TActions = {
  [key: string]: (args?: any[]) => TAction;
};
export type TState = {
  [key: string]: any;
};
