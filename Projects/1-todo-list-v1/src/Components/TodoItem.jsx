import { MdDeleteForever } from "react-icons/md";
const TodoItem = ({ todoDate, todoName, onDeleteClick, key }) => {
  return (
    <div className="container ">
      <div className="row my-row" key={key}>
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-btn"
            onClick={onDeleteClick}
          >
            <MdDeleteForever /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
