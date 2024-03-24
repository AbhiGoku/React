import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/Buttons/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, SetCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      SetCalVal("");
    } else if (buttonText === "=") {
      const number = eval(calVal);
      SetCalVal(number);
    } else {
      const newDisplayValue = calVal + buttonText;
      SetCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calVal={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
