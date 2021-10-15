// Reducers
import counterReducer from "./counterReducer";
import todosReducer from "./todosReducer";
// ... other reducers

import { combineReducers } from "redux";

//States
const allReducers = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default allReducers;
