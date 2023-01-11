import { combineReducers, compose, createStore } from "redux";
import reducer from "./reducers";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const  configureStore = prelodedState => createStore(
    reducer,
    prelodedState,
    composeEnhancers(),

);

const store = configureStore({});

export default store;