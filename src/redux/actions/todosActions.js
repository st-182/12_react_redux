import {
  TODOS_FAIL,
  TODOS_REQUEST,
  TODOS_SUCCESS,
} from "../constants/todosConstants";

export const todosSuccess = (payload) => {
  return {
    type: TODOS_SUCCESS,
    payload: payload,
  };
};

export const todosRequest = () => {
  return {
    type: TODOS_REQUEST,
  };
};
export const todosFail = (payload) => {
  return {
    type: TODOS_FAIL,
    payload: payload,
  };
};
