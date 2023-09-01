import './App.css';
import Header from "./myCOMPONENTS/Header";
import { AddTodo } from "./myCOMPONENTS/AddTodo";
import { Todos } from "./myCOMPONENTS/Todos";
import { Footer } from "./myCOMPONENTS/Footer";
import { About } from './myCOMPONENTS/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    // localStorage.getItem("todos");
    // setTodos(localStorage.getItem("todos"));
  }
  let addTodo = (title, desc) => {
    console.log("adding todo with title: ", title, "and description: ", desc);
    let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    let myTodo = {
      id: id,
      title: title,
      desc: desc
    }
    console.log(id);
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <>
      <Router>
        <Header title="MyTodoList" searchbar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
