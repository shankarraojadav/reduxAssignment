import Card from "./card";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    Card: Card,
});

export default rootReducer;