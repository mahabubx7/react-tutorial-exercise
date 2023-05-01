const TodoItem = ({ item, delTodo }) => {



  return (
    <li>
      <label>
      <input type="checkbox" name="completed"
        checked={item.completed}
        onChange={() => handleChange(item.id)}
      />
        <span>{item.name}</span>
      </label>

      <span className="btn-actions">
        <button type="button">
          <i className="ri-edit-line"></i>
        </button>

        <button type="button"
          onClick={() => delTodo(item.id)}
        >
          <i className="ri-delete-bin-7-line"></i>
        </button>
      </span>
    </li>
  );
};

export default TodoItem;
