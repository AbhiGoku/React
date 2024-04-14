const TodoItem = ({ todoDate, todoName, onDeleteClick }) => {
  return (
    <div class="container ">
      <div class="row my-row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger my-btn"
            onClick={() => {
              onDeleteClick();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
