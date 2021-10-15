import {
  TODOS_FAIL,
  TODOS_REQUEST,
  TODOS_SUCCESS,
} from "../constants/todosConstants";

const todosReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODOS_REQUEST:
      return { loading: true, todos: [] };
    case TODOS_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODOS_FAIL:
      return { loading: false, todos: [], error: action.payload };
    default:
      return state;
  }
};
export default todosReducer;
