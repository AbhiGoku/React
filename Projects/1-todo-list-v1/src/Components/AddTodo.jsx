import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddTodo({ handleNewItem }) {
  const todoNameElement = useRef(0);
  const todoDueDateElement = useRef(0);

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = todoDueDateElement.current.value;
    onNewItem(todoName, dueDate);

    todoDueDateElement.current.value = "";
    todoNameElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row my-row">
        <div className="col-4">
          <input type="text" ref={todoNameElement} placeholder="enter todo" />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-btn"
            onClick={() => {
              handleAddButtonClicked;
            }}
          >
            <IoMdAddCircle /> Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
