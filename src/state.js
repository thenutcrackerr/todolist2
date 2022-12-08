import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function state() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);

    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArr) => [toDo, ...currentArr]);
  };

  console.log(toDos);
  console.log(toDo);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder=" "
        ></input>
        <button>추가하기</button>
        <div>Todo List</div>
      </form>
      <hr />
      {toDos.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
    </div>
  );
}

export default state;
