import React, { useContext, useState } from 'react';
import { ToDoContext } from './ToDoContext';
import EditToDo from './EditToDo';

const ToDoItem = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(ToDoContext);
  const [isEditing, setIsEditing] = useState(false);

  const toggleComplete = () => {
    updateTodo(todo.id, { completed: !todo.completed });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      {isEditing ? (
        <EditToDo todo={todo} setIsEditing={setIsEditing} />
      ) : (
        <>
          <span >
            {todo.title}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
