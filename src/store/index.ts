import { createStore, applyMiddleware } from "redux";
import { reducers } from "./store";
import logger from "../middlewares/logger";
import { composeWithDevTools } from "redux-devtools-extension";

const enhancer = composeWithDevTools(applyMiddleware(logger));
const store = createStore(reducers, {}, enhancer);

export default store;
