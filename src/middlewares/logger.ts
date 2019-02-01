import { TAction } from "../store/store.d";
import { Dispatch } from "redux";

export default (store: any) => (next: Dispatch) => (action: TAction) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};
