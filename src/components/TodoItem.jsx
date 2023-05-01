import { useState } from "react";

const TodoItem = (props) => {

  const { item, editTodo, delTodo, handleChange } = props;
  const [editing, setEditing] = useState(false);

  const itemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };
  const actionBtnStyles = {
    backgroundColor: 'transparent',
    padding: '0.25rem 0.35rem',
  };
  const editInputStyles = {
    width: 'calc(100%)',
    padding: '0.5rem',
    borderRadius: 'calc(0.5 * 100px)',
    fontSize: '1rem',
    border: 'none',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdate = (e) => {
    if (e.key === 'Enter') setEditing(false);
  };

  return (
    <li>
      <div style={itemStyles}>
        <label>
        <input type="checkbox" name="completed"
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />
          <span>{item.name}</span>
        </label>

        <span className="btn-actions">
          <button type="button" style={actionBtnStyles} onClick={handleEditing}>
            <i className="ri-edit-line"></i>
          </button>

          <button type="button"
            style={actionBtnStyles}
            onClick={() => delTodo(item.id)}
          >
            <i className="ri-delete-bin-7-line"></i>
          </button>
        </span>
      </div>

      {
        editing === true ?
        (
          <>
            <input type="text" value={item.name}
              onKeyDown={handleUpdate}
              onChange={(e) => editTodo({
                ...item,
                name: e.target.value,
              })}
              className="edit-input"
            />
          </>
        ) : null
      }
    </li>
  );
};

export default TodoItem;
