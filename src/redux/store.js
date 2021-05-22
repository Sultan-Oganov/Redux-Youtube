import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import homeReducer from "./redusers/home-reducer";
import { composeWithDevTools } from "redux-devtools-extension"

let rootReducers = combineReducers({
    homePage: homeReducer
})

let store = createStore(rootReducers, composeWithDevTools(applyMiddleware(ReduxThunk)))

window.store = store

export default store