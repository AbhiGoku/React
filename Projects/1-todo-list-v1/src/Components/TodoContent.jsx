import TodoItem from "./TodoItem";

function TodoContent({ todoLists, onDeleteClick }) {
  return (
    <>
      <div>
        {todoLists.map((item) => (
          <TodoItem
            todoDate={item.date}
            todoName={item.workName}
            onDeleteClick={onDeleteClick}
            key={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoContent;
