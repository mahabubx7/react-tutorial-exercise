import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, delTodo }) => {

  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0',
  };

  return (
    <ul style={listStyle}>
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
