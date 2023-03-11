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
  const onDelete = (todo) => {
    console.log("onDelete", todo);
    let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the mrket",
      desc: "To buy makeup kits and dresses"
    },
    {
      sno: 2,
      title: "Do homework",
      desc: "Math and science homework"
    },
    {
      sno: 3,
      title: "Clean room",
      desc: "vacumming cleaning"
    }
  ])
  return (
    <>
      <Header title="My Todos List" />
      <Addtodos />
      <Todos todos={todos} onDelete={onDelete} />
      {/* <Footer /> */}
    </>




  );
}

export default App;
