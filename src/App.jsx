import React, { useState } from 'react';
import { Page, View, Block, Button } from "framework7-react";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
  const [display, setDisplay] = useState("");
  const [calculated, setCalculated] = useState(false);

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => {
      if (calculated || prevDisplay === "Error") {
        setCalculated(false);
        return value;
      }
      return prevDisplay + value;
    });
  };

  const clearDisplay = () => {
    setDisplay("");
    setCalculated(false);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setCalculated(true);
    } catch (error) {
      setDisplay("Error");
      setCalculated(false);
    }
  };

  const toggleSign = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay) {
        if (prevDisplay.charAt(0) === "-") {
          return prevDisplay.substring(1);
        } else {
          return "-" + prevDisplay;
        }
      }
      return prevDisplay;
    });
  };

  const calculatePercentage = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay) {
        try {
          const result = eval(prevDisplay) / 100;
          return result.toString();
        } catch (error) {
          return "Error";
        }
      }
      return prevDisplay;
    });
  };

  return (
    <Page>
      <View>
        <Block className="calculator">
          <div className="display">{display}</div>
          <div className="grid-container">
            <Button className="button2" onClick={clearDisplay}>
              C
            </Button>
            <Button className="button2" onClick={toggleSign}>
              +/-
            </Button>
            <Button className="button2" onClick={calculatePercentage}>
              %
            </Button>
            <Button className="button1" onClick={() => appendToDisplay("/")}>
              /
            </Button>
            <Button className="button" onClick={() => appendToDisplay("7")}>
              7
            </Button>
            <Button className="button" onClick={() => appendToDisplay("8")}>
              8
            </Button>
            <Button className="button" onClick={() => appendToDisplay("9")}>
              9
            </Button>
            <Button className="button1" onClick={() => appendToDisplay("*")}>
              *
            </Button>
            <Button className="button" onClick={() => appendToDisplay("4")}>
              4
            </Button>
            <Button className="button" onClick={() => appendToDisplay("5")}>
              5
            </Button>
            <Button className="button" onClick={() => appendToDisplay("6")}>
              6
            </Button>
            <Button className="button1" onClick={() => appendToDisplay("-")}>
              -
            </Button>
            <Button className="button" onClick={() => appendToDisplay("1")}>
              1
            </Button>
            <Button className="button" onClick={() => appendToDisplay("2")}>
              2
            </Button>
            <Button className="button" onClick={() => appendToDisplay("3")}>
              3
            </Button>
            <Button className="button1" onClick={() => appendToDisplay("+")}>
              +
            </Button>
            <Button
              className="button button-zero"
              onClick={() => appendToDisplay("0")}
            >
              0
            </Button>
            <Button className="button" onClick={() => appendToDisplay(".")}>
              .
            </Button>
            <Button className="button1" onClick={calculate}>
              =
            </Button>
          </div>
        </Block>
      </View>
    </Page>
  );
}

export default App;
