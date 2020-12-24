import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createDebounce from "redux-debounced"
import rootReducer from "./reducers/rootReducer";

const middleWares = [thunk,createDebounce()];
const composeEnhancers =  compose;

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(...middleWares))
);

export { store }