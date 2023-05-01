import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, delTodo }) => {
  return (
    <ul>
      {todos.map(item => (
        <TodoItem key={item.id} item={item}
          handleChange={handleChange}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
