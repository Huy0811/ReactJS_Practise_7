import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import Books from "./components/book";
import { Button, Modal } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { State } from "./components/redux/reducer/rootReducer";
import Salary from "./components/salary";
import Color from "./components/color/color";

function App() {
  const [myInput, setMyInput] = useState(1);
  const result = useSelector((state: State) => state.math);
  const dispatch = useDispatch();
  const [text, setText] = useState("white");
  const [style, setStyle] = useState({ backgroundColor: "red" });
  useEffect(() => {
    setStyle({ backgroundColor: text });
  }, [text]);
  return (
    <div className="App">
      <Books />
      <p>Nhập vào một số nguyên dương</p>
      <h2>{result}</h2>
      <input
        type="number"
        value={myInput}
        onChange={(event) => setMyInput(Number(event.currentTarget.value))}
      />
      <Button
        type="primary"
        onClick={() => dispatch({ type: "Calculate", payload: myInput })}
      >
        Calculate
      </Button>
      <Salary />
      <input
        type="radio"
        name="color"
        onClick={(e) => {
          if (e.currentTarget.checked == true) {
            setText("red");
          }
        }}
      />
      <input
        type="radio"
        name="color"
        onClick={(e) => {
          if (e.currentTarget.checked == true) {
            setText("blue");
          }
        }}
      />
      <input
        type="radio"
        name="color"
        onClick={(e) => {
          if (e.currentTarget.checked == true) {
            setText("yellow");
          }
        }}
      />
      <input
        type="radio"
        name="color"
        onClick={(e) => {
          if (e.currentTarget.checked == true) {
            setText("green");
          }
        }}
      />
      <Color style={style} />
    </div>
  );
}

export default App;
