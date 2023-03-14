import React, { useState } from "react";
import GetDataByName from "./GetDataByName";

function Form() {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setValue(e.target[0].value);
  };
  return (
    <div>
      <h2>Enter The Name of Pokemon</h2>
      <form onSubmit={submitHandler}>
        <input type="text" />
      </form>
      {value && <GetDataByName name={value.toLowerCase()} />}
    </div>
  );
}

export default Form;
