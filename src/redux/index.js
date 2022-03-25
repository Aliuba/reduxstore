import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducers";
import thunk from "redux-thunk";

export const store=createStore(reducer, applyMiddleware(thunk))
export * from "../redux/action-types"
export * from "../redux/action-creators"
