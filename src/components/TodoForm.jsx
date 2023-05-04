import { useState } from "react";
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {

  const [title, setTitle] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({
        name: title,
        completed: false,
      });
      setTitle(''); // reset input field
      setMsg('');
    } else {
      setMsg('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="ri-add-circle-line"></i>
        </button>
      </form>

      <span className="warning">{msg}</span>
    </>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
