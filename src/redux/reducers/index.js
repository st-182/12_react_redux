// Reducers
import counterReducer from './counterReducer';
// ... other reducers

import { combineReducers } from 'redux';

const allReducers = combineReducers({ counter: counterReducer });

export default allReducers;
