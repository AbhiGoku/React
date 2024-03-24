import styles from "./ButtonsContainer.module.css";
// import Button from "./Button";
function Buttons({ onButtonClick }) {
  const buttonValues = [
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
      {/* <Button num={numbers} onButtonClick={()=>onButtonClick()}></Button> */}

      {buttonValues.map((buttonValue) => (
        <button
          className={styles.button}
          key={buttonValue}
          onClick={() => onButtonClick(buttonValue)}
        >
          {buttonValue}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
