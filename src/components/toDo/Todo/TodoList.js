import { TodoItem } from "./TodoItem"
import TransitionGroup from 'react-transition-group/TransitionGroup'
const TodoList = (props) => {
    return (
        <TransitionGroup>
            {props.todos.map((item) => (
                <TodoItem todo={item} removeItem={props.removeTodo} key={item.id}/>
            ))}
        </TransitionGroup>
    )
}
export default TodoList;