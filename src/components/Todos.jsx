import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  todosFail,
  todosRequest,
  todosSuccess,
} from "../redux/actions/todosActions";
const StyledTodosDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  div {
    /* font-size: 2rem; */
  }
`;
const StyledSingleTodoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ completed }) => (completed ? "red" : "green")};
`;

const Todos = () => {
  // Hooks
  // -- state
  const count = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [showTodos, setShowTodos] = useState(false);
  const [reloadState, setReloadState] = useState(false);
  const [showInteractiveTodos, setShowInteractiveTodos] = useState(
    count.todos ? count.todos : []
  );

  useEffect(() => {
    const getTodos = async () => {
      try {
        dispatch(todosRequest());

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        //   console.log(res);
        //   console.log(count);
        const response = await res.status;
        if (response !== 200) {
          dispatch(todosFail("Error"));
        } else {
          const data = await res.data;
          dispatch(todosSuccess(data));
          setShowInteractiveTodos(data);
        }
      } catch (error) {
        dispatch(todosFail(error));
      }
    };
    getTodos();
    return () => {};
  }, [reloadState]);
  const filterTodos = () => {};
  return (
    <>
      <button onClick={() => setShowTodos(!showTodos)}>Show todos</button>
      <button onClick={() => dispatch(todosFail("Error"))}>
        Change Redux State to Error
      </button>
      <button onClick={() => setReloadState(!reloadState)}>
        Reload Todos and Success State
      </button>

      <StyledTodosDiv>
        {showTodos &&
          (count.todos ? (
            showInteractiveTodos.map((item) => (
              <StyledSingleTodoDiv key={item.id} completed={item.completed}>
                <p>{item.title}</p>
                <input type="checkbox" />
              </StyledSingleTodoDiv>
            ))
          ) : (
            <p>Loading...</p>
          ))}

        {count.error && <p>{count.error}</p>}
      </StyledTodosDiv>
    </>
  );
};

export default Todos;
