import React from 'react';

const Todo = ({ text, todo, setTodos, todos }) => {
    //События
    const deleteHandler = () => {
        setTodos(todos.filter(elem => elem.id !== todo.id)) //с помощью метода filter
        // мы удаляем задачки он отфильтровывает их так если elem id будет совпадать с todo.id то тогда произойдет удаление
    };

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
// условие если todo.completed то добавь класс completed иначе пустая строка, благодаря этому условию задачку зачеркивается переключаясь на true
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i><
                /button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;