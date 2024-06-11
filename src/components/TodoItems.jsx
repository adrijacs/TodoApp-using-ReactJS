import TodoItem from "./TodoItem";
function TodoItems({ todoItems, handleDelete }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.todoName}
          todoDate={item.todoDate}
          todoName={item.todoName}
          handleDelete={handleDelete}
        />
      ))}
    </>
  );
}
export default TodoItems;
