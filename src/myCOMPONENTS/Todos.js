import React from "react";
import { Todo } from "./Todo.js";

export const Todos = (props) => {
  let myStyle = {
    minHieght: "70vh",
    margin: "50px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">All Todos!</h3>
      {props.todos.length === 0
        ? "you completed all tasks!"
        : props.todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} onDelete={props.onDelete} />;
          })}
    </div>
  );
};
