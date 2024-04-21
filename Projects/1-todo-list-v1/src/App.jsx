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
    setTodoItems((currValue) => {
      const newTodoItems = [
        ...currValue,
        { name: itemName, dueDate: itemDueDate },
      ];
      return newTodoItems;
    });
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddTodo handleNewItem={onNewItem}></AddTodo>
      <div className="items-container">
        <TodoContent
          todoLists={initialTodoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoContent>
      </div>
      <div>{initialTodoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}</div>
    </div>
  );
}

export default App;
