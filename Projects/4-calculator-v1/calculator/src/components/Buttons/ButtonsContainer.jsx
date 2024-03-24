import styles from "./ButtonsContainer.module.css";
import Button from "./Button";
function Buttons() {
  const numbers = [
    "C",
    1,
    2,
    "+",
    3,
    4,
    "-",
    5,
    6,
    "*",
    7,
    8,
    "/",
    "=",
    9,
    0,
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {/* {numbers.map((number) => { */}
      <Button num={numbers}></Button>
    </div>
  );
}
export default Buttons;
