

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { movieReducer } from "./reducers/movieReducer";

const rootReducer = combineReducers({
    movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;