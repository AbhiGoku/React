import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Item from "./components/Item";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = ["Dal", "Roti", "Milk", "Green Vegetable", "Salad"];

  let [foodItems, setFoodItems] = useState(["Dal", "Roti", "Milk"]);

  //this is for checking the item is bought or not
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(event.key);
      let newFoodItem = event.target.value;
      //this is to empty the text box.
      event.target.value = "";
      let newItems = [...foodItems];
      //... is like a spread sheet. It will open up the value that comes after it.
      if (newFoodItem) {
        newItems = [...foodItems, newFoodItem];
      }

      setFoodItems(newItems);
    }
  };
  return (
    <Container>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        {/* 3:17:00 youtube video, explaination. */}
        {foodItems.map((item) => (
          /** Passing this foodItemVariable as a parameter name for the Item file. Youtube :3:46:00 */
          <Item
            foodItemVariable={item}
            key={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => {
              onBuyButton(item, event);
            }}
          ></Item>
        ))}
      </ul>
    </Container>
  );
}

export default App;
