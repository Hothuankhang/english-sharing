import {combineReducers} from 'redux';
import courseReducer from './reducer';

const rootReducer = combineReducers({
    course:courseReducer,
});

export default rootReducer;