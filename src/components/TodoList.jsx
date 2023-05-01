import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleChange, editTodo, delTodo }) => {

  const listStyle = {
    listStyle: 'none',
    paddingLeft: '0',
  };

  return (
    <ul style={listStyle}>
      {todos.map(item => (
        <TodoItem key={item.id} item={item}
          handleChange={handleChange}
          editTodo={editTodo}
          delTodo={delTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
