import { Dispatch } from "redux";
import { DocumentNode } from "apollo-boost";

export interface IAppProps {
  dispatch: Dispatch;
  emptyField?: string;
  testQuery?: string;
  data?: DocumentNode;
}
export interface IAppState {}
