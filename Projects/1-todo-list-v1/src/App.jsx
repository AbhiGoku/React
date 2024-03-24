
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoContent from "./Components/TodoContent";
import "./App.css";

function App() {
  let TodoNames = ["Buy Milk", "Go College"];
  let TodoDates = ["10/10/10", "10/10/10"];

  let todoLists = [
    {
      workName: "Buy Milk",
      date: "10/10/10",
    },
    {
      workName: "Go to College",
      date: "10/10/10",
    },
  ];
  return (
    <div className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>;
      <div className="items-container">
        {todoLists.map((todoList) => (
          <TodoContent
            todoName={todoList.workName}
            todoDate={todoList.date}
          ></TodoContent>
        ))}
      </div>
    </div>
  );
}

export default App;
