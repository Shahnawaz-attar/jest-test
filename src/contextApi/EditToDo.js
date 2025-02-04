import React, { useState, useContext } from 'react';
import { ToDoContext } from './ToDoContext';

const EditToDo = ({ todo, setIsEditing }) => {
  const { updateTodo } = useContext(ToDoContext);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (title.trim()) {
      updateTodo(todo.id, { title });
      setIsEditing(false);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
};

export default EditToDo;
