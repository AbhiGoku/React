import TodoItem from "./TodoItem";

function TodoContent({ todoItems }) {
  return (
    <>
      <div >
        {todoItems.map((item) => (
          <TodoItem
            todoDate={item.todoDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoContent;
