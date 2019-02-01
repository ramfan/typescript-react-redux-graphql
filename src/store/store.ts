import { TActionType, TAction, TActions, TState } from "./store.d";

const actionTypes: TActionType = {
  EMPOTY_ACTION: "EMPOTY_ACTION"
};

export const actions: TActions = {
  emptyAction: () => ({
    type: actionTypes.EMPOTY_ACTION,
    payload: "emptyAction"
  })
};

const initialState: TState = {};

export const reducers = (state: TState = initialState, action: TAction) => {
  const { EMPOTY_ACTION } = actionTypes;
  switch (action.type) {
    case EMPOTY_ACTION: {
      return {
        ...state,
        empty: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
