import styles from "./Button.module.css";

function Button({ num }) {
  return (
    <>
      {num.map((nums) => (
        <button className={styles.button}>{nums}</button>
      ))}
    </>
  );
}

export default Button;
