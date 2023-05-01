import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TodoList;
