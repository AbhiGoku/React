import styles from "./Item.module.css";

function Item({ foodItemVariable, bought, handleBuyButton }) {
  return (
    /** back tick is used to grp the muliple className values. since "" will be used to call the name of the styled value cannot use it b4 */
    <li
      className={`${styles["my-item"]} list-group-item ${bought && "active"}`}
    >
      <span>{foodItemVariable}</span>
      <button
        className={`${styles.myButton} btn btn-info`}
        onClick={handleBuyButton}
      >
        BUY
      </button>
    </li>
  );
}

export default Item;
