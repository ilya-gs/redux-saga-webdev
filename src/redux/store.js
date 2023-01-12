import { compose, createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/sagas";


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


const  configureStore = prelodedState => createStore(
    reducer,
    prelodedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)), 

);

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;