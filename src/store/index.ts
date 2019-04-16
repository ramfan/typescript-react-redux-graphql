import {createStore, applyMiddleware, combineReducers} from "redux";
import { reducers } from "./store";
import logger from "../middlewares/logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from 'redux-form'

const allReducers = {
    reducers,
    from: formReducer
};

const reducersCombine = combineReducers(allReducers);
const enhancer = composeWithDevTools(applyMiddleware(logger));
const store = createStore(reducersCombine, {}, enhancer);

export default store;
