import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import { usersReducers } from "../modules/users/usersReducers";
import { bootstrapReducer } from "../bootstrap/bootstrapReducer";

let rootReducers = combineReducers({
  users: usersReducers,
  bootstrap: bootstrapReducer,
});
export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
