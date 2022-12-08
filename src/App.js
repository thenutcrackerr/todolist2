// src/App.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  // 👇 코드 추가
  const number = useSelector((state) => state.counter.number);

  console.log(number); // 콘솔 추가
  return (
    <div>
      {number}
      <button
        onClick={() => {
          dispatch({ type: "PLUS_ONE" });
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          // 액션객체 디스패치
          dispatch({ type: "MINUS_ONE" });
        }}
      >
        - 1
      </button>
    </div>
  );
};

export default App;
