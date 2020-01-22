
import authReducer from './authReducer';
import projectReducer from './projectReducer';
import mealReducer from './mealReducer';


import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    meal: mealReducer
});

export default rootReducer;