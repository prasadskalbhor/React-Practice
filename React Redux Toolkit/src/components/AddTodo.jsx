import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    let data = addTodo(input);
    console.log("this is only add to do call: : ", data);
    let d = dispatch(data);
  };
  return (
    <div>
      <h1>Add to do</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodoHandler}>add</button>
    </div>
  );
}

export default AddTodo;
