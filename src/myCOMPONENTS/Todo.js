import React from 'react'

export const Todo = ({todo, onDelete}) => {

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-outline-danger" onClick={()=>{onDelete(todo)}}>Delete!</button>
      <hr />
    </div>
  )
}
