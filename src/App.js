import React, { useState, useEffect } from "react";
import './App.css';

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    //Набор стейтов
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]); //Создали стейт для хранения задач, начальное значение у нас будет пустым массивом потому что у нас будет массив объектов
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);


    // useEffect(() => {
    //     getLocalTodos();
    // }, [])

    //Use Effect
    useEffect(() => {
        filterHandler();
        // saveLocalTodos();
    },[todos, status])

    //Функции
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    //Сохранение в локал сторэдже
    // const saveLocalTodos = () => {
    //     if (localStorage.getItem('todos') === null) {
    //         localStorage.setItem('todos', JSON.stringify([]));
    //     } else {
    //         localStorage.setItem('todos', JSON.stringify(todos))
    //     }
    // }

    // const getLocalTodos = () => {
    //     if (localStorage.getItem('todos') === null) {
    //         localStorage.setItem('todos', JSON.stringify([]));
    //     } else {
    //       let todoLocal = JSON.parse(localStorage.getItem('todos'))
    //         setTodos(todoLocal)
    //     }
    // }

  return (
    <div className="App">
        <header>
            <h1>Karim's Todo List</h1>
        </header>
        <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
        />
        <TodoList
            setTodos={setTodos}
            todos={todos}
            filteredTodos={filteredTodos}
         />
    </div>
  );
}

export default App;
