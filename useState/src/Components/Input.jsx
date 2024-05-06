import React, { useState } from "react";

const Input = () => {
  const [inp, setInp] = useState("");
  return (
    <div>
      <h3>Your Entered Text : {inp}</h3>
      <input
        type="text"
        placeholder="Enter your text here..."
        onInput={(event) => setInp(event.target.value)}
      />
    </div>
  );
};

export default Input;
