import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {

  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      name: 'first item',
      completed: false,
    },
    {
      id: uuidv4(),
      name: 'second item',
      completed: false,
    },
  ]);

  const handleChange = (id) => {
    setTodo((prev) => prev.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    }));
  };

  const addTodo = (item) => {
    setTodo([...todo, { ...item, id: uuidv4() }]);
  };

  const delTodo = (id) => {
    setTodo([
      ...todo.filter((item) => {
        return item.id !== id;
      }),
    ]);
  };

  return (
    <div className="page">
      <header>
        <h1>todos</h1>
      </header>

      <TodoForm addTodo={addTodo} />

      <TodoList
        todos={todo}
        delTodo={delTodo}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Todo;
