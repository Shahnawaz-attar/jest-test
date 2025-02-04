import React, { useContext, useState } from 'react'
import { ToDoContext } from './ToDoContext'

const AddToDo = () => {
    const {addTodo} = useContext(ToDoContext)

    const [title, setTitle] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault();

        if(title.trim()){
            addTodo({title , completed:true})
        }
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add ToDo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddToDo