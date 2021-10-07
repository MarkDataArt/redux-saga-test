import { combineReducers } from 'redux';
import { songReducer } from './songReducer';
import { namesReducer } from './namesReducer';

export const rootReducer = combineReducers({
    songData: songReducer,
    names: namesReducer
});