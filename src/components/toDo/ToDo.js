import { useState } from 'react';
import classes from './styling.module.css'
import TodoClass from './TodoClass';
import NewTodo from './Todo/NewTodo';
import TodoList from './Todo/TodoList';
import useStore from './todoStore/store';

function Todo() {

  const [state, dispatch] = useStore()

  const addTodo = (todo) => {
    if (state.todos.find(item => item === todo) === undefined) {
      dispatch("ADD_TODO", todo)
    }
  }

  const removeTodo = (todo) => {
    setTimeout(() => {
      dispatch("REMOVE_TODO", todo)
    }, 400);
  }

  return (
    <div className={classes.container}>
      <NewTodo addTodo={addTodo}/>
      <TodoList todos={state.todos} removeTodo={removeTodo}/>
    </div>
  );
}

export default Todo;