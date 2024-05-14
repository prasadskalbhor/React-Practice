import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deletetodo = (todoId) => {
    console.log("remove", todoId);
    dispatch(removeTodo(todoId));
  };
  return (
    <div>
      <h1>to do list</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            console.log("this is data a; ", todo);
            return (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.text}</td>
                <td>
                  <button
                    onClick={() => deletetodo(todo.id)}
                    style={{ backgroundColor: "red" }}
                  >
                    Delete
                  </button>
                  <button style={{ backgroundColor: "Green" }}>
                    Completed
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Todos;
