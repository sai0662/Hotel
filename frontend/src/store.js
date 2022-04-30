import {legacy_createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { hotelDetailsReducer, hotelListReducer } from './reducers/hotelReducers';
import thunk from 'redux-thunk';
import {bookReducer} from './reducers/bookReducers';

const initialState ={};
const  reducer = combineReducers({
    hotelList: hotelListReducer,
    hotelDetails : hotelDetailsReducer,
    book:bookReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;