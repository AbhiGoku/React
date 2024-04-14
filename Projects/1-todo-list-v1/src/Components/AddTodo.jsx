import { useState } from "react";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    handleNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div class="container text-center">
      <div class="row my-row">
        <div class="col-4">
          <input
            type="text"
            placeholder="enter todo"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success my-btn"
            onClick={() => {
              handleAddButtonClicked;
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
