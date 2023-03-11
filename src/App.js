// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Alert from 'react-bootstrap/Alert';
import Header from './My Components/Header';
import Footer from './My Components/Footer';
import Todos from './My Components/Todos';
import Addtodos from './My Components/Addtodos'
import React, { useState } from 'react';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("onDelete", todo);
    let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
    // let  sno = todos[todos.length - 1].sno + 1
    // let  sno = todos[todos.length - 1].sno + 1
  }
  const addTodo = (title, desc) => {
    let sno
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1

    }

    console.log('addtodolist');
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    if (localStorage.getItem("todos")) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }

  }

  const [todos, setTodos] = useState(initTodo)
  return (
    <>
      <Header title="My Todos List" />
      <Addtodos addTodos={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>




  );
}

export default App;
