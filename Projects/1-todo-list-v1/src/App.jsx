import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoContent from "./Components/TodoContent";
import WelcomeMsg from "./Components/WelcomeMsg";

import "./App.css";
import { useState } from "react";

function App() {
  let initialTodoItems = [
    {
      workName: "Buy Milk",
      date: "10/10/10",
    },
    {
      workName: "Go to College",
      date: "10/10/10",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const onNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} Date:${itemDueDate} `);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddTodo handleNewItem={onNewItem}></AddTodo>;
      <div className="items-container">
        {initialTodoItems.map((todoList) => (
          <TodoContent
          todoItems={todoList}
          ></TodoContent>
        ))}
      </div>
      {todoItems.length===0} &&& <WelcomeMsg ></WelcomeMsg>
    </div>
  );
}

export default App;
