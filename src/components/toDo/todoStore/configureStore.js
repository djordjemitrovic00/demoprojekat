import TodoClass from "../TodoClass";
import { initStore } from "./store"

export const configureStore = () => {
    const addTodo = (state, todo) => {
        state.todos = [...state.todos, todo];
    }
    const removeTodo = (state, todo) => {
        state.todos = state.todos.filter(p => p.id !== todo.id);
    }
    initStore({
        "ADD_TODO": addTodo, 
        "REMOVE_TODO": removeTodo
    }, {todos: [
        new TodoClass("Do something #3"),
        new TodoClass("Do homework")
      ]});
}