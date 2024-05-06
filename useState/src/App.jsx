import React, { useState } from "react";
import Counter from "./Components/Counter";
import ToggleComponent from "./Components/ToggleComponent";
import Input from "./Components/Input";
import ToDoList from "./Components/ToDoList";
import ColorPicker from "./Components/ColorPicker";

const App = () => {
  const [showComp, setShowComp] = useState(false);
  return (
    <div>
      <h1>useState Examples</h1>
      <Counter />
      <hr />
      <button onClick={() => setShowComp(!showComp)}>Toggle Component </button>
      {showComp ? <ToggleComponent /> : null}
      <hr />
      <Input />
      <hr />
      {/* <ToDoList /> */}
      <hr />
      <ColorPicker />
    </div>
  );
};

export default App;
