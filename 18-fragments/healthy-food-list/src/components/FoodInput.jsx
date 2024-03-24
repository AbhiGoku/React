import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter food Item here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
      {/* <button
        type="button"
        className="{${styles.myButton}} btn btn-primary"
      >
        Add
      </button> */}
    </>
  );
};

export default FoodInput;
