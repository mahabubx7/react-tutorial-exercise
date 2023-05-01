const TodoItem = ({ item, delTodo, handleChange }) => {


  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const actionBtnStyles = {
    backgroundColor: 'transparent',
    padding: '0.25rem 0.35rem',
  };


  return (
    <li style={itemStyles}>
      <label>
      <input type="checkbox" name="completed"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
        <span>{item.name}</span>
      </label>

      <span className="btn-actions">
        <button type="button" style={actionBtnStyles}>
          <i className="ri-edit-line"></i>
        </button>

        <button type="button"
          style={actionBtnStyles}
          onClick={() => delTodo(item.id)}
        >
          <i className="ri-delete-bin-7-line"></i>
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
