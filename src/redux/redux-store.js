import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import commonReducer from "./commonReduser";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


let reducers = combineReducers({
    form: formReducer,
    common: commonReducer

})
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store
