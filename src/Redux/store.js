import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { Reducer as AppReducer } from "./App/Reducer";
import { Reducer as AuthReducer } from "./Auth/Reducer";

// const rootReducer = combineReducers({ AppReducer, AuthReducer });
const rootReducer = AuthReducer;

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
