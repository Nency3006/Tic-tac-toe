// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  var [value, setValue] = useState(["", "", "", "", "", "", "", "", ""]);
  var [main, setmain] = useState(true);
  var [text, setText] = useState("");
  var [disable, setdisable] = useState("");
  const [red, setRed] = useState(true);

  var buttonClickHandler = (i) => {
    let copyvalue;
    if (main) {
      copyvalue = [...value];
      copyvalue[i] = "X";
      setValue(copyvalue);
      setmain(false);
    } else {
      copyvalue = [...value];
      copyvalue[i] = "0";
      setValue(copyvalue);
      setmain(true);
    }

    if (copyvalue[0] == "0" && copyvalue[1] == "0" && copyvalue[2] == "0") {
      setText("0 win");
    } else if (
      copyvalue[3] == "0" &&
      copyvalue[4] == "0" &&
      copyvalue[5] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[6] == "0" &&
      copyvalue[7] == "0" &&
      copyvalue[8] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[0] == "0" &&
      copyvalue[3] == "0" &&
      copyvalue[6] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[1] == "0" &&
      copyvalue[4] == "0" &&
      copyvalue[7] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[2] == "0" &&
      copyvalue[5] == "0" &&
      copyvalue[8] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[0] == "0" &&
      copyvalue[4] == "0" &&
      copyvalue[8] == "0"
    ) {
      setText("0 win");
    } else if (
      copyvalue[2] == "0" &&
      copyvalue[4] == "0" &&
      copyvalue[6] == "0"
    ) {
      setText("0 win");
    }
    if (copyvalue[0] == "X" && copyvalue[1] == "X" && copyvalue[2] == "X") {
      setText("X win");
    } else if (
      copyvalue[3] == "X" &&
      copyvalue[4] == "X" &&
      copyvalue[5] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[6] == "X" &&
      copyvalue[7] == "X" &&
      copyvalue[8] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[0] == "X" &&
      copyvalue[3] == "X" &&
      copyvalue[6] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[1] == "X" &&
      copyvalue[4] == "X" &&
      copyvalue[7] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[2] == "X" &&
      copyvalue[5] == "X" &&
      copyvalue[8] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[0] == "X" &&
      copyvalue[4] == "X" &&
      copyvalue[8] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[2] == "X" &&
      copyvalue[4] == "X" &&
      copyvalue[6] == "X"
    ) {
      setText("X win");
    } else if (
      copyvalue[0] !== "" &&
      copyvalue[1] !== "" &&
      copyvalue[2] !== "" &&
      copyvalue[3] !== "" &&
      copyvalue[4] !== "" &&
      copyvalue[5] !== "" &&
      copyvalue[6] !== "" &&
      copyvalue[7] !== "" &&
      copyvalue[8] !== ""
    ) {
      setText("draw");
    }

    //  else(copyvalue == disabled : true);
  };
  var newhandle = () => {
    setValue(["", "", "", "", "", "", "", "", ""]);
    setText("");
  };

  return (
    <div className="App">
      <div className="main">
        <div className="box">
          <h1>Tic Tac Toe</h1>
          <h2>{text}</h2>

          {value.map((el, i) => {
            return (
              <button
                key={"tictacbutton"+i}
                disabled={el || text ? true : false}
                className="btn"
                onClick={() => buttonClickHandler(i)}
              >
                {el}
              </button>
            );
          })}

          <button className="main" onClick={() => newhandle()} restart={"true"}>
            restart
          </button>

          <h4>conditional rendering</h4>
          {red ? <div className="red"></div> : <div className="green"></div>} 
          <button onClick={() => setRed(!red)}>Change</button>
        </div>
      </div>
    </div>
  );
}

export default App;
