import { useState } from "react";
import { createContext } from "react";


// Create the Context
export const ToDoContext = createContext()


export const ToDoProvider = ({children}) =>{
    const [todos, setTodos] = useState([]);


    //create
    const addTodo = (todo) =>{
        setTodos([...todos ,{todo , id:Date.now()}])
    }

  // Update
  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  // Delete
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


    return (
        <ToDoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
                {children}
        </ToDoContext.Provider>
    )

}