import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

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
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="enter todo"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={() => {
              handleAddButtonClicked;
            }}
          >
            <IoMdAddCircle />            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
