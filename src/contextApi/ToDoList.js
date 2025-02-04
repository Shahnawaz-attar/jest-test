import React, { useContext } from "react";
import { ToDoContext } from "./ToDoContext";
import ToDoItem from "./ToDoItem";

const ToDoList = () => {
  const { todos } = useContext(ToDoContext);
  console.log(todos);
  if (todos.length === 0) return <p>No ToDos available.</p>;

  return (
    <div>
  <ul>
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
    </ul>
    </div>
  );
};

export default ToDoList;
